"use client";
import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface CommonDropdownProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: Option[];
  fullWidth?: boolean; 
  sx?: object; 
}

const CommonDropdown: React.FC<CommonDropdownProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  fullWidth = true, 
  sx = {}, 
}) => {
  return (
    <FormControl fullWidth={fullWidth} sx={{ width: '100%', height: '80px' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonDropdown;
