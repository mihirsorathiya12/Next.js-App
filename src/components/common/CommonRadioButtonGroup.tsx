import React from "react";
import { RadioGroup, FormControlLabel, Radio, FormLabel, FormControl } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface CommonRadioButtonGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
  required?: boolean;  
}

const CommonRadioButtonGroup: React.FC<CommonRadioButtonGroupProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <FormControl component="fieldset" required={required}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange} row>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio required={required} />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CommonRadioButtonGroup;
