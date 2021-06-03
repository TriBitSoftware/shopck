import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

interface BusinessSignUpFormProps {

}

const useStyles = makeStyles({
    root: {

    },

    heading: {
        marginTop: 8
    },

    inputField: {
        margin: 8
    },
    formControl: {
        margin: 8
    }
});


export const BusinessSignUpForm: React.FC<BusinessSignUpFormProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h6" className={classes.heading}>
                Personal Information
            </Typography>

            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Full Name"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Email Address"
                placeholder="@example.com"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Phone Number"
                placeholder="123-456-7890"
            />

            <Typography variant="h6" className={classes.heading}>
                Business Information
            </Typography>

            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Business Name"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Business Email"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Phone"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Address"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Postal Code"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="City"
                placeholder="Joe Smith"
            />

            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Facebook"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Twitter"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Instagram"
                placeholder="Joe Smith"
            />
            <TextField
                className={classes.inputField}
                variant="outlined"
                label="Social Media"
                placeholder="Joe Smith"
            />

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Business Categorie(s)</FormLabel>
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
            <Typography variant="body1" className={classes.heading}>
                Please upload your logo and 3 additional photos of your business(optional):
            </Typography>
          
        </Box>
    );
}