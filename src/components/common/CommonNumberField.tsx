"use client";

import React from "react";
import { TextField, TextFieldProps, SxProps, Theme } from "@mui/material";

interface CommonNumberFieldProps
  extends Omit<TextFieldProps, "type" | "value" | "onChange"> {
  label: string;
  name: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

const CommonNumberField: React.FC<CommonNumberFieldProps> = ({
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
      type="number"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth={fullWidth}
      inputProps={{ min, max }}
      sx={sx}
      {...rest}
    />
  );
};

export default CommonNumberField;
