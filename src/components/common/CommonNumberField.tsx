"use client";

import React from "react";
import { TextField } from "@mui/material";

export interface CommonNumberFieldProps {
  label: string;
  name: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  min?: number;
  max?: number;
  fullWidth?: boolean; 
  sx?: object; 
}

const CommonNumberField: React.FC<CommonNumberFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  min,
  max,
  fullWidth = true, 
  sx = {}, //
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type="number"
      required={required}
      inputProps={{ min, max }}
      fullWidth={fullWidth} 
       sx={{ width: '100%', height: '80px' }}
    />
  );
};

export default CommonNumberField;
