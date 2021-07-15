import { Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

interface FormHeaderProps {
}

const useStyles = makeStyles({
    formTitle: {
        fontWeight: "bold",
        fontSize: 32,
        marginBottom: 16,
    },

    titleSectionDivider: {
        marginTop: 32,
    },

    subheading: {
        fontSize: 20,
        marginTop: 8,
    },
});

export const FormHeader: React.FC<FormHeaderProps> = ({ }) => {
    const classes = useStyles();

    return (
        <div id="formHeader">
            <Typography className={classes.formTitle}>Get listed on ShopCK</Typography>
            <Typography className={classes.subheading}>For businesses located in the Municipality of Chatham-Kent</Typography>
            <Typography className={classes.subheading}>If you require any assistance filling out this form, please contact Taylor at 519-987-3278 or email info@shopck.ca. Thank you!</Typography>
            <Divider orientation="horizontal" variant="fullWidth" className={classes.titleSectionDivider} />
        </div>
    );
}