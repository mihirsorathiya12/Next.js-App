import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

type CommonTextAreaProps = TextFieldProps & {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  minRows?: number;
  fullWidth?: boolean;
  sx?: object;
};

const CommonTextArea: React.FC<CommonTextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  multiline = true,      
  minRows = 3,           
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
      multiline={multiline}
      minRows={minRows}
      fullWidth={fullWidth}
      sx={{ width: "100%", ...sx }}
      {...rest}
    />
  );
};

export default CommonTextArea;
