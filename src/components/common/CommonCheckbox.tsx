"use client";

import React from "react";
import { Checkbox } from "@mui/material";

export interface CommonCheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({
  name,
  checked,
  onChange,
}) => {
  return (
    <Checkbox
      name={name}
      checked={checked}
      onChange={onChange}
      color="primary"
    />
  );
};

export default CommonCheckbox;
