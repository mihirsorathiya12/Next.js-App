
import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

type CommonTextAreaProps = TextFieldProps & {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CommonTextArea: React.FC<CommonTextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      multiline
      minRows={3}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default CommonTextArea;
