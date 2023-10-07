import React from 'react'
import { FormControl ,InputLabel, Select, MenuItem} from '@mui/material'
import { CostProps } from './types';

const Cost = ({ toiletFee, setToiletFee }: CostProps) => {
  
  const handleChange = (event: any) => {
    setToiletFee(event.target.value as string);
  };
  
  return (
    <div>
      <fieldset>
        <legend>Toilet Fee</legend>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Fee</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={toiletFee}
          label={toiletFee}
          onChange={handleChange}
        >
          <MenuItem value={"Free"}>Free</MenuItem>
          <MenuItem value={"Chargeable"}>Paid</MenuItem>
        </Select>
      </FormControl>
      </fieldset>
    </div>
  )
}

export default Cost