import { Box, Typography, TextField, makeStyles } from '@material-ui/core';
import React from 'react'

interface InputFieldProps {
    label: string
    name: string | undefined
    value: string
    type?: string
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}

const useStyles = makeStyles({

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

export const InputField: React.FC<InputFieldProps> = ({ label, name, value, type, onChange }: InputFieldProps) => {
    const classes = useStyles();

    return (
        <Box width="100%" display="flex" flexDirection="row" alignItems="center" className={classes.inputBlock}>
            <Typography className={classes.formLabelLeft}>
                {label}
            </Typography>
            <TextField
                className={classes.inputField}
                variant="outlined"
                value={value}
                name={name}
                type={type}
                onChange={onChange}
                required
            />
        </Box>
    );
}