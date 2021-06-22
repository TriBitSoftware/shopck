import { Box, FormHelperText, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputField } from './InputField';
import * as Yup from 'yup';
import { useFormik, getIn } from 'formik';
import { DropzoneArea } from 'material-ui-dropzone';
import { FormInfo, initialFormInfo, businessInfoInputFields, CustomTextInputField, businessCategories } from '../type';
import { ContactInfo } from './form_sections/ContactInfo';
import { FormHeader } from './form_sections/FormHeader';
import axios, { AxiosResponse } from 'axios';

interface BusinessSignUpFormProps {

}

const useStyles = makeStyles({
    root: {
        marginBottom: 64,
        paddingTop: 64,
        display: "flex",
        flexDirection: "column",
        color: "#2C3345",
    },

    sectionDivider: {
        marginTop: 32,
        marginBottom: 32,
    },

    heading: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 64,
    },

    subheading: {
        fontSize: 20,
        marginTop: 8,
    },

    inputLabel: {
        fontWeight: 500,
        fontSize: 20,
        margin: 8,
    },

    formLabelLeft: {
        fontWeight: 500,
        fontSize: 20,
        margin: 8,
        flex: 0.5,
    },

    inputField: {
        margin: 8,
        flex: 1,
        flexGrow: 1,
    },

    inputBlock: {
        marginTop: 8,
        marginBottom: 8,
    },

    button: {
        backgroundColor: "#000",
        color: "#FFF",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingRight: "32px",
        paddingLeft: "32px",
        margin: 32,
        alignSelf: "center"
    },

    formControl: {
        margin: 8
    }
});

export const BusinessSignUpForm: React.FC<BusinessSignUpFormProps> = ({ }) => {
    const classes = useStyles();
    const [formInfo, setFormInfo] = useState<FormInfo>({ ...initialFormInfo });


    const addPhotos = (acceptedPhotos: File[]) => {
        acceptedPhotos.forEach(photo => {
            console.log(photo);
            formInfo.photos.push(photo)
        })
        setFormInfo({
            ...formInfo,
            photos: formInfo.photos
        })
    }

    const removePhoto = (removedPhoto: File) => {
        setFormInfo({
            ...formInfo,
            photos: formInfo.photos.filter(photo => photo.name != removedPhoto.name)
        })
    }

    const FormValidationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        businessName: Yup.string()
            .required('Required'),
        businessPhoneNumber: Yup.number()
            .typeError("Enter a valid number")
            .required('Required'),
        businessEmail: Yup.string()
            .email('Invalid email'),
        description: Yup.string()
            .required('Required'),
        categories: Yup.array().min(1, "Required")
    });

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'Token',
            "Access-Control-Allow-Origin": "*",

        }
    };

    const formik = useFormik<FormInfo>({
        initialValues: { ...initialFormInfo },
        validationSchema: FormValidationSchema,
        onSubmit: (values) => {
            console.log("Client side: ")
            console.log(JSON.stringify(values))
            axios.post(
                "/submitForm",
                JSON.stringify(values),
                axiosConfig
            ).then(res => {
                return axios.post(
                    "/registrationEmail",
                    JSON.stringify(values),
                    axiosConfig
                )
            }).then(res => {

            })
        },
    });

    return (
        <Container maxWidth="md" className={classes.root}>

            {/* Form Heading */}
            <FormHeader />
            <form onSubmit={formik.handleSubmit} noValidate>
                <Box display="flex" flexDirection="column">
                    {/* Part 1 - Contact Info */}
                    <ContactInfo onClear={formik.setFieldValue} formErrors={formik.errors} formInfo={formik.values} handleChange={formik.handleChange} />

                    {/* Part 2 - Business Info */}
                    <Typography className={classes.heading}>
                        Part 2 - Business Info
                     </Typography>
                    <Typography className={classes.subheading}>Provide the information that will be shown on your ShopCK business listing.</Typography>
                    <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

                    {businessInfoInputFields.map((inputField: CustomTextInputField) => (
                        <InputField
                            label={inputField.label}
                            name={inputField.name}
                            value={getIn(formik.values, inputField.name)}
                            onChange={props => {
                                formik.handleChange(props);
                            }}
                            error={getIn(formik.errors, inputField.name) ? true : false}
                            helperText={getIn(formik.errors, inputField.name)}
                            onClear={
                                () => formik.setFieldValue(inputField.name, "", false)
                            }
                        />
                    ))}

                    <Typography className={classes.formLabelLeft}>
                        What categories should your business be listed in?
                    </Typography>
                    <FormControl error={formik.errors.categories ? true : false} component="fieldset" className={classes.formControl} required>
                        <FormLabel component="legend">Select a maximum of two categories</FormLabel>
                        <Grid container>
                            {businessCategories.map(category => (
                                <Grid item xs={6}>
                                    <FormControlLabel
                                        disabled={formik.values.categories.length == 2 && !formik.values.categories.includes(category)}
                                        control={<Checkbox name="categories" value={category} onChange={props => {
                                            formik.handleChange(props);
                                        }} />}
                                        label={category}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <FormHelperText>{formik.errors.categories}</FormHelperText>
                    </FormControl>

                    <Typography className={classes.formLabelLeft}>
                        Business Description (what you would like to say within your directory listing about your business).
                    </Typography>
                    <TextField
                        className={classes.inputField}
                        variant="outlined"
                        placeholder="Type here..."
                        value={formik.values.description}
                        name="description"
                        onChange={formik.handleChange}
                        multiline
                        error={formik.errors.description ? true : false}
                        helperText={formik.errors.description}
                        rows={8}
                    />

                    <Typography variant="body1" className={classes.formLabelLeft}>
                        Please upload your logo and 3 additional photos of your business (optional):
                    </Typography>
                    <DropzoneArea
                        onDrop={acceptedFiles => addPhotos(acceptedFiles)}
                        onDelete={removedFile => { removePhoto(removedFile) }}
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        filesLimit={4}
                        maxFileSize={30000000}
                    />

                    <Typography className={classes.formLabelLeft}>
                        Any additional comments/suggestions. (optional)
                    </Typography>
                    <TextField
                        name="feedback"
                        value={formik.values.feedback}
                        onChange={formik.handleChange}
                        className={classes.inputField}
                        variant="outlined"
                        placeholder="Type here..."
                        multiline
                        required
                        rows={4}
                    />

                    <Button className={classes.button} type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
}