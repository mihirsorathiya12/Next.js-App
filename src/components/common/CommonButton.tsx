import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface CommonButtonProps extends ButtonProps {
  label: string;
  fullWidth?: boolean;
  sx?: object;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  label,
  fullWidth = true, 
  sx = {},
  ...rest
}) => {
  return (
    <Button variant="contained" fullWidth={fullWidth} sx={sx} {...rest}>
      {label}
    </Button>
  );
};

export default CommonButton;
