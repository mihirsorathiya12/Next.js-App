import { TextField, TextFieldProps } from "@mui/material";
import React from "react";


type CommonTextFieldProps = TextFieldProps & {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...rest} 
    />
  );
};

export default CommonTextField;
