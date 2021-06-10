import { Typography, Divider, Box, TextField, makeStyles } from '@material-ui/core';
import React from 'react'
import { InputField } from '../components/InputField';
import { PersonalInfo } from '../types';

interface ContactInfoProps {
    personalInfo: PersonalInfo
    setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>
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

export const ContactInfo: React.FC<ContactInfoProps> = ({ personalInfo, setPersonalInfo }: ContactInfoProps) => {
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
                    onChange={e => {
                        setPersonalInfo({
                            ...personalInfo,
                            [e.target.name]: e.target.value
                        })
                    }}
                    value={personalInfo.firstName}
                    required
                />
                <TextField
                    className={classes.inputField}
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    onChange={e => {
                        setPersonalInfo({
                            ...personalInfo,
                            [e.target.name]: e.target.value
                        })
                    }}
                    value={personalInfo.lastName}
                    required
                />
            </Box>

            <InputField
                label="Email Address"
                name="email"
                value={personalInfo.email}
                onChange={e => {
                    setPersonalInfo({
                        ...personalInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <InputField
                label="Phone Number"
                name="phoneNumber"
                value={personalInfo.phoneNumber}
                type="tel"
                onChange={e => {
                    setPersonalInfo({
                        ...personalInfo,
                        [e.target.name]: e.target.value
                    })
                }}
            />
        </div>
    );
}