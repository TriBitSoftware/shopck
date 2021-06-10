import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import { InputField } from './components/InputField';
import { BusinessInfo, initialBusinessInfo, initialPersonalInfo, PersonalInfo } from './types';
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
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);
    const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(initialBusinessInfo);

    return (
        <Container maxWidth="md" className={classes.root}>

            {/* Form Heading */}
            <FormHeader />

            {/* Part 1 - Contant Info */}
            <ContactInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

            {/* Part 2 - Business Info */}
            <Typography className={classes.heading}>
                Part 2 - Business Info
            </Typography>
            <Typography className={classes.subheading}>Provide the information that will be shown on your ShopCK business listing.</Typography>
            <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

            <InputField
                label="Business Name"
                name="name"
                value={businessInfo.name}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Business Phone"
                name="phoneNumber"
                value={businessInfo.phoneNumber}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Business Address"
                name="address"
                value={businessInfo.address}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Business Email"
                name="email"
                value={businessInfo.email}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Business Website"
                name="websiteUrl"
                value={businessInfo.websiteUrl}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Facebook"
                name="facebook"
                value={businessInfo.facebook}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Twitter"
                name="twitter"
                value={businessInfo.twitter}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Instagram"
                name="instagram"
                value={businessInfo.instagram}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Other Social Media"
                name="phoneNumber"
                value={""}
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />

            <Typography className={classes.formLabelLeft}>
                What categories should your business be listed in?
            </Typography>
            <FormControl component="fieldset" className={classes.formControl} required>
                <FormLabel component="legend">Select a maximum of two categories</FormLabel>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Advertising & Media"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Agriculture, Fishing, & Forestry"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Arts, Culture & Entertainment"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Automotive"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Business & Professional Services"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Cleaning & Restoration"
                        />
                    </Grid> <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Computers & Telecommunications"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Construction Equipment & Contractors"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Finance & Insurance"
                        />
                    </Grid> <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Golf Course"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Government & Education"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Health Care"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Legal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Lodging & Travel"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Manufacturing, Production & Wholesale"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Not-For-Profit Organizations"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Personal Services & Day Care"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Pets & Veterinary"
                        />
                    </Grid> <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Public Utilities & Environment"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Real Estate, Moving & Storage"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Restaurants, Food Services & Catering"
                        />
                    </Grid> <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Shopping & Specialty Retail"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Sports & Recreation"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Transportation"
                        />
                    </Grid>
                </Grid>
            </FormControl>

            <Typography className={classes.formLabelLeft}>
                Business Description (what you would like to say within your directory listing about your business).
                 </Typography>
            <TextField
                className={classes.inputField}
                variant="outlined"
                placeholder="Type here..."
                value={businessInfo.desc}
                name="desc"
                onChange={e => {
                    setBusinessInfo({
                        ...businessInfo,
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
                onDrop={acceptedFiles => console.log(acceptedFiles)}
                onDelete={removedFile => { }}
                acceptedFiles={['image/*']}
                dropzoneText={"Drag and drop an image here or click"}
                filesLimit={4}
                maxFileSize={30000000}
            />

            <Typography className={classes.formLabelLeft}>
                Any additional comments/suggestions (optional)
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
                console.log(personalInfo)
                console.log(businessInfo)
            }}>
                Submit
            </Button>
        </Container>
    );
}