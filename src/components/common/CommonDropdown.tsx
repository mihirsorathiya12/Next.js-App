import React from "react";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, FormHelperText } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface CommonDropdownProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  options: Option[];
  fullWidth?: boolean;
  sx?: object;
  required?: boolean;  
  error?: boolean;
  helperText?: string;
}

const CommonDropdown: React.FC<CommonDropdownProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  fullWidth = false,
  sx,
  required = false,
  error = false,
  helperText = "",
}) => {
  return (
    <FormControl fullWidth={fullWidth} sx={sx} required={required} error={error}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        required={required}  
        
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CommonDropdown;
