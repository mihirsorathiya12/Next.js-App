
import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface CommonButtonProps extends ButtonProps {
  label: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({ label, ...rest }) => {
  return (
    <Button variant="contained" fullWidth {...rest}>
      {label}
    </Button>
  );
};

export default CommonButton;
