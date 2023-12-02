import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const radioStyle = {
  color: '#F1CDD3', // Change to the color you desire
};

const labelStyle = {
  border: '1px solid #F1CDD3',
  borderRadius: '5px',
  padding: '5px',
  marginRight: '10px', // Add margin for spacing
};

const formControlStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px', // Add margin at the bottom for spacing
};

const options = [
  { value: 'ordinaria', label: 'Ordinaria' },
  { value: 'extraordinaria', label: 'Extraordinaria' },
];

export default function ProgramarSesion() {
  return (
    <FormControl style={formControlStyle}>
      <FormLabel id="demo-row-radio-buttons-group-label">Tipo de Sesión</FormLabel>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio style={radioStyle} />}
            label={option.label}
            style={labelStyle}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}


