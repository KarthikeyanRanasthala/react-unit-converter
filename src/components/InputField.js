import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

const InputField = props => {
    return (
        <Grid item xs={6}>
            <TextField
                variant='outlined'
                label={props.data.label}
                value={props.data.currentValue}
                name={props.data.name}
                onChange={props.handleInput}
                InputProps={{
                    endAdornment: <InputAdornment position='end'>{props.data.input}</InputAdornment>
                }}
                style={{width: '100%'}}
            />
        </Grid>
    )
}

export default InputField;