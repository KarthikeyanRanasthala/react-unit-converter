import React from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Selector = props => {
    return (
        <Grid item xs={props.data.size}>
            <FormControl variant='outlined' style={{width: '100%'}}>
                <InputLabel>{props.data.label}</InputLabel>
                <Select
                    value={props.data.selectedValue}
                    onChange={props.handleSelector}
                    inputProps={{ name: props.data.populateType }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    {
                        props.data.populateType === 'mainSelector' ? (
                            props.data.populateWith.map((ele, index) => <MenuItem value={props.data.measurements[index]} key={index}>{ele}</MenuItem>)
                        ) : (
                            props.data.populateWith.map(ele => <MenuItem value={ele.abbr} key={ele.abbr}>{ele.plural}</MenuItem>)
                        )
                    }
                </Select>
            </FormControl>
        </Grid>
    )
}

export default Selector;