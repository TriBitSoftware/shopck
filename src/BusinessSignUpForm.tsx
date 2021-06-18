import { Button, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import { InputField } from './components/InputField';
import { businessCategories, businessInfoInputFields, FormInfo, initialFormInfo, initialPersonalInfo, PersonalInfo } from './types';
import { FormHeader } from './form_sections/FormHeader';
import { ContactInfo } from './form_sections/ContactInfo';

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
    // const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);
    // const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(initialBusinessInfo);
    const [formInfo, setFormInfo] = useState<FormInfo>({ ...initialFormInfo });

    const addPhotos = (acceptedPhotos: File[]) => {
        acceptedPhotos.forEach(photo => {
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

    const handleCategoryChange = (value: string, isChecked: boolean) => {
        if (isChecked) {
            setFormInfo({
                ...formInfo,
                categories: [...formInfo.categories, value]
            })
        } else {
            setFormInfo({
                ...formInfo,
                categories: formInfo.categories.filter(category => category != value)
            })
        }
    }

    return (
        <Container maxWidth="md" className={classes.root}>

            {/* Form Heading */}
            <FormHeader />

            {/* Part 1 - Contact Info */}
            <ContactInfo formInfo={formInfo} setFormInfo={setFormInfo} />

            {/* Part 2 - Business Info */}
            <Typography className={classes.heading}>
                Part 2 - Business Info
            </Typography>
            <Typography className={classes.subheading}>Provide the information that will be shown on your ShopCK business listing.</Typography>
            <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

            {businessInfoInputFields.map(inputField => (
                <InputField
                    label={inputField.label}
                    name={inputField.name}
                    value={inputField.value}
                    onChange={e => {
                        inputField.value = e.target.value
                        setFormInfo({
                            ...formInfo,
                            [e.target.name]: e.target.value
                        })
                    }}
                    onClear={(name: string) => {
                        inputField.value = ""
                        setFormInfo({
                            ...formInfo,
                            [name]: ""
                        })
                    }}
                />
            ))}

            <Typography className={classes.formLabelLeft}>
                What categories should your business be listed in?
            </Typography>
            <FormControl component="fieldset" className={classes.formControl} required>
                <FormLabel component="legend">Select a maximum of two categories</FormLabel>
                <Grid container>
                    {businessCategories.map(category => (
                        <Grid item xs={6}>
                            <FormControlLabel
                                disabled={formInfo.categories.length == 2 && !formInfo.categories.includes(category)}
                                control={<Checkbox value={category} onChange={(e, isChecked) => handleCategoryChange(e.target.value, isChecked)} />}
                                label={category}
                            />
                        </Grid>
                    ))}

                </Grid>
            </FormControl>

            <Typography className={classes.formLabelLeft}>
                Business Description (what you would like to say within your directory listing about your business).
                 </Typography>
            <TextField
                className={classes.inputField}
                variant="outlined"
                placeholder="Type here..."
                value={formInfo.desc}
                name="desc"
                onChange={e => {
                    setFormInfo({
                        ...formInfo,
                        [e.target.name]: e.target.value
                    })
                }}
                multiline
                required
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
                className={classes.inputField}
                variant="outlined"
                placeholder="Type here..."
                multiline
                required
                rows={4}
            />

            <Button className={classes.button} onClick={() => {
                fetch('/api/business-customer/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formInfo),
                })
            }}>
                Submit
            </Button>
        </Container>
    );
}