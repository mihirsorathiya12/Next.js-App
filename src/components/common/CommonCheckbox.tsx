"use client";

import React from "react";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

export interface CommonCheckboxProps extends CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  sx?: object;
}

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({
  name,
  checked,
  onChange,
  label,
  sx = {},
  ...rest
}) => {
  const checkboxElement = (
    <Checkbox
      name={name}
      checked={checked}
      onChange={onChange}
      color="primary"
      sx={sx}
      {...rest}
    />
  );

  return label ? (
    <FormControlLabel control={checkboxElement} label={label} />
  ) : (
    checkboxElement
  );
};

export default CommonCheckbox;
