import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

type CommonTextFieldProps = TextFieldProps & {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  sx?: object;
};

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  fullWidth = true,
  sx = {},
  ...rest
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      sx={{ width: '100%', height: '80px',  }}
      {...rest}
    />
  );
};

export default CommonTextField;
