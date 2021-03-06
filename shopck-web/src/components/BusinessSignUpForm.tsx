import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { useFormik, getIn } from 'formik';
import { FormInfo, initialFormInfo, businessInfoInputFields, CustomTextInputField, businessCategories, Image } from '../type';
import { storage } from '../firebase-config';
import { Container, Divider, Checkbox, TextField, Box, Typography, FormControl, FormLabel, Grid, FormControlLabel, FormHelperText, Button, Snackbar } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import { ContactInfo } from './form_sections/ContactInfo';
import { FormHeader } from './form_sections/FormHeader';
import { InputField } from './InputField';
import axios from 'axios';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

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

function Alert(props: AlertProps) {
    return <MuiAlert elevation={2} variant="filled" {...props} />;
}

export const BusinessSignUpForm: React.FC<BusinessSignUpFormProps> = ({ }) => {
    const classes = useStyles();
    const [photos, setPhotos] = useState<File[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);

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
        validateOnChange: false,
        validateOnBlur: false,
        onReset: (values) => {
            formik.setValues({ ...initialFormInfo })
        },
        onSubmit: (values) => {

            uploadImages().then(res => {

                let formData: FormInfo = { ...values, photos: res }

                axios.post(
                    "/submitForm",
                    JSON.stringify(formData),
                    axiosConfig
                ).then(res => {
                    return axios.post(
                        "/registrationEmail",
                        JSON.stringify(formData),
                        axiosConfig
                    )
                }).then(res => {
                    setSubmitted(true);
                    formik.resetForm();
                })
            })
        },
    });

    const showError = (key: string) => {
        return getIn(formik.errors, key) && getIn(formik.touched, key) ? true : false
    }

    const uploadImages = async () => {
        if (photos.length == 0) {
            return []
        }
        const urls = photos.map(async photo => {
            let fileType = photo.name.split('.').pop()
            let currentImageName = photo.name.split('.').slice(0, -1).join('.') + "-" + Date.now() + "\." + fileType;
            const uploadImage = await storage.ref(`images/business-images/${currentImageName}`).put(photo);

            const url = await uploadImage.ref.getDownloadURL();
            let image: Image = {
                imageName: currentImageName,
                imageData: url,
                imageType: photo.type
            }
            return image;
        })
        let images = await Promise.all(urls)
        return images
    }

    const addPhotos = (acceptedPhotos: File[]) => {
        acceptedPhotos.forEach(photo => {
            setPhotos(currPhotos => [...currPhotos, photo])
        })
    }

    const removePhoto = (removedPhoto: File) => {
        setPhotos(currPhotos => currPhotos.filter(photo => photo.name != removedPhoto.name))
    }

    return (
        <Container maxWidth="md" className={classes.root}>

            {/* Form Heading */}
            <FormHeader />

            <form onSubmit={formik.handleSubmit} noValidate>
                <Box display="flex" flexDirection="column">
                    {/* Part 1 - Contact Info */}
                    <ContactInfo onClear={formik.setFieldValue} showError={showError} formErrors={formik.errors} formInfo={formik.values} handleChange={formik.handleChange} />

                    {/* Part 2 - Business Info */}
                    <Typography className={classes.heading}>
                        Part 2 - Business Info
                    </Typography>

                    <Typography className={classes.subheading}>Provide the information that will be shown on your ShopCK business listing.</Typography>

                    <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

                    {businessInfoInputFields.map((inputField: CustomTextInputField, index: number) => (
                        <InputField
                            key={index}
                            label={inputField.label}
                            name={inputField.name}
                            value={getIn(formik.values, inputField.name)}
                            onChange={props => {
                                formik.handleChange(props);
                            }}
                            error={showError(inputField.name)}
                            helperText={showError(inputField.name) && getIn(formik.errors, inputField.name)}
                            onClear={
                                () => formik.setFieldValue(inputField.name, "", false)
                            }
                        />
                    ))}

                    <Typography className={classes.formLabelLeft}>
                        What categories should your business be listed in?
                    </Typography>

                    <FormControl error={showError("categories")} component="fieldset" className={classes.formControl} required>
                        <FormLabel component="legend">Select a maximum of two categories</FormLabel>
                        <Grid container>
                            {businessCategories.map(category => (
                                <Grid item xs={6} key={category} >
                                    <FormControlLabel
                                        disabled={formik.values.categories.length == 2 && !formik.values.categories.includes(category)}
                                        control={<Checkbox name="categories" checked={formik.values.categories.includes(category)} value={category} onChange={props => {
                                            formik.handleChange(props);
                                        }} />}
                                        label={category}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <FormHelperText> {showError("categories") ? formik.errors.categories : ""}</FormHelperText>
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
                        error={showError("description")}
                        helperText={showError("description") && formik.errors.description}
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
                        alertSnackbarProps={{ anchorOrigin: { vertical: 'top', horizontal: 'right' } }}
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
                    {!formik.isValid &&
                        <Alert style={{ maxWidth: "50%", alignSelf: "center" }} severity="error">
                            Please fix form errors!
                        </Alert>
                    }

                    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} style={{ maxWidth: "50%", alignSelf: "start" }} open={formik.isValid
                        && submitted} autoHideDuration={6000} onClose={() => setSubmitted(false)}>
                        <Alert onClose={() => setSubmitted(false)} severity="success">
                            Thank you for registering your business with ShopCK!
                        </Alert>
                    </Snackbar>

                </Box>
            </form>
        </Container>
    );
}