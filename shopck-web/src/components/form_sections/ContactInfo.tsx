import { Typography, Divider, Box, TextField, makeStyles } from '@material-ui/core';
import React from 'react'
import { InputField } from '../InputField';
import { FormikErrors } from 'formik';
import { FormInfo } from '../../type';

interface ContactInfoProps {
    formInfo: FormInfo
    handleChange: (e: React.ChangeEvent<any>) => void
    formErrors: FormikErrors<FormInfo>
    onClear: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<FormInfo>>
}

const useStyles = makeStyles({

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
});

export const ContactInfo: React.FC<ContactInfoProps> = ({ onClear, formInfo, formErrors, handleChange }: ContactInfoProps) => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.heading}>
                Part 1 - Contact Info
            </Typography>
            <Typography className={classes.subheading}>This info will not be displayed in the directory, but will be for our records. </Typography>
            <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

            <Typography className={classes.inputLabel}>
                Contact Name
            </Typography>

            <Box width="100%" display="flex" flexDirection="row" className={classes.inputBlock}>
                <TextField
                    className={classes.inputField}
                    variant="outlined"
                    label="First Name"
                    name="firstName"
                    error={formErrors.firstName ? true : false}
                    helperText={formErrors.firstName}
                    onChange={handleChange}
                    value={formInfo.firstName}
                    required
                />
                <TextField
                    className={classes.inputField}
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    error={formErrors.lastName ? true : false}
                    helperText={formErrors.lastName}
                    onChange={handleChange}
                    value={formInfo.lastName}
                    required
                />
            </Box>

            <InputField
                label="Email Address"
                name="email"
                value={formInfo.email}
                error={formErrors.email ? true : false}
                helperText={formErrors.email}
                onChange={handleChange}
                onClear={() => onClear("email", "", false)}
            />
            <InputField
                label="Phone Number"
                name="phoneNumber"
                error={formErrors.phoneNumber ? true : false}
                helperText={formErrors.phoneNumber}
                value={formInfo.phoneNumber}
                type="tel"
                onChange={handleChange}
                onClear={() => onClear("phoneNumber", "", false)}
            />
        </div>
    );
}