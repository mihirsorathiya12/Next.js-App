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
}

const CommonNumberField: React.FC<CommonNumberFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  min,
  max,
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
      fullWidth
    />
  );
};

export default CommonNumberField;
