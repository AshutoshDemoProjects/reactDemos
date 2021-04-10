import { FormControl, FormHelperText, Slider, Typography } from '@material-ui/core';
import React from 'react'


export default function RangePicker(props) {
    const { name, label, value, error = null, onChange, steps, min, max } = props;
    return (
        <FormControl variant='outlined' {...(error && { error: true })}>
            <Typography id="discrete-slider-always" gutterBottom>{label} <strong>{value}</strong></Typography>
            <Slider
                name={name}
                key={`slider-${value}`}
                defaultValue={value}
                step={steps || 10}
                valueLabelDisplay='auto'
                onChange={(e, value) => onChange({ target: { name, value } })}
                min={min || 0} max={max || 100}
                aria-labelledby="non-linear-slider"
            />
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
