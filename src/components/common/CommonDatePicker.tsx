"use client";

import React from "react";
import { TextField, SxProps, Theme } from "@mui/material";

interface CommonDatePickerProps {
  label: string;
  name: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  min?: string; 
  max?: string; 
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  min,
  max,
  fullWidth,
  sx,
}) => {
  return (
    <TextField
      type="date"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      InputLabelProps={{ shrink: true }}
      inputProps={{
        min,
        max,
      }}
      fullWidth={fullWidth}
      sx={{ width: '100%', height: '80px' }}
    />
  );
};

export default CommonDatePicker;
