import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

type CommonTextAreaProps = TextFieldProps & {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  sx?: object;
};

const CommonTextArea: React.FC<CommonTextAreaProps> = ({
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
      multiline
      minRows={3}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
     sx={{ width: '100%'  }}
      {...rest}
    />
  );
};

export default CommonTextArea;
