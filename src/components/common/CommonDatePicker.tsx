"use client";

import React from "react";
import { TextField, SxProps, Theme, TextFieldProps } from "@mui/material";

interface CommonDatePickerProps extends Omit<TextFieldProps, "type"> {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  fullWidth = true,
  sx = {},
  required = false,
  ...rest
}) => {
  return (
    <TextField
      type="date"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth={fullWidth}
      InputLabelProps={{ shrink: true }}
      inputProps={{ min, max }}
      sx={sx}
      {...rest}
    />
  );
};

export default CommonDatePicker;
