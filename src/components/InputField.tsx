import { Box, Typography, TextField, makeStyles, InputAdornment, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import React from 'react'

interface InputFieldProps {
    label: string
    name: string
    value: string
    type?: string
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
    onClear: (name: string) => void
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

export const InputField: React.FC<InputFieldProps> = ({ label, name, value, type, onChange, onClear }: InputFieldProps) => {
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
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="reset" onClick={() => onClear(name)} >
                                <Clear />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    );
}