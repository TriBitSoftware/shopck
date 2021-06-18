import { Typography, Divider, Box, TextField, makeStyles } from '@material-ui/core';
import React from 'react'
import { InputField } from '../components/InputField';
import { FormInfo, PersonalInfo } from '../types';

interface ContactInfoProps {
    formInfo: FormInfo
    setFormInfo: React.Dispatch<React.SetStateAction<FormInfo>>
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

export const ContactInfo: React.FC<ContactInfoProps> = ({ formInfo, setFormInfo }: ContactInfoProps) => {
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
                        setFormInfo({
                            ...formInfo,
                            [e.target.name]: e.target.value
                        })
                    }}

                    value={formInfo.firstName}
                    required
                />
                <TextField
                    className={classes.inputField}
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    onChange={e => {
                        setFormInfo({
                            ...formInfo,
                            [e.target.name]: e.target.value
                        })
                    }}
                    value={formInfo.lastName}
                    required
                />
            </Box>

            <InputField
                label="Email Address"
                name="email"
                value={formInfo.email}
                onChange={e => {
                    setFormInfo({
                        ...formInfo,
                        [e.target.name]: e.target.value
                    })
                }}
                onClear={(name: string) => {
                    setFormInfo({
                        ...formInfo,
                        [name]: ""
                    })
                }}
            />
            <InputField
                label="Phone Number"
                name="phoneNumber"
                value={formInfo.phoneNumber}
                type="tel"
                onChange={e => {
                    setFormInfo({
                        ...formInfo,
                        [e.target.name]: e.target.value
                    })
                }}
                onClear={(name: string) => {
                    setFormInfo({
                        ...formInfo,
                        [name]: ""
                    })
                }}
            />
        </div>
    );
}