"use client";

import React, { useState } from "react";
import {
  Card,
  Typography,
  GridLegacy as Grid,
  FormControlLabel,
  SelectChangeEvent,
} from "@mui/material";

import CommonTextField from "../components/common/CommonTextField";
import CommonTextArea from "../components/common/CommonTextArea";
import CommonDropdown from "../components/common/CommonDropdown";
import CommonRadioGroup from "../components/common/CommonRadioButtonGroup";
import CommonCheckbox from "../components/common/CommonCheckbox";
import CommonNumberField from "../components/common/CommonNumberField";
import CommonDatePicker from "../components/common/CommonDatePicker";


interface FieldConfig {
  type: string; 
  label: string;
  name: string;
  required?: boolean;
  options?: { value: string; label: string }[]; 
  min?: number | string;
  max?: number | string;
  fullWidth?: boolean;
  sx?: object;
}


interface FormValues {
  [key: string]: any;
}

const formFields: FieldConfig[] = [
  {
    type: "text",
    label: "Email",
    name: "email",
    required: true,
    fullWidth: false,
    sx: { mt: 3 },
  },
  {
    type: "date",
    label: "Birth Date",
    name: "birthDate",
    required: true,
    min: "1900-01-01",
    max: new Date().toISOString().split("T")[0],
  },
  {
    type: "number",
    label: "Age",
    name: "age",
    required: true,
    min: 0,
    max: 100,
    fullWidth: false,
    sx: { mt: 1 ,width: "100%",height: '50px',},
  },
  {
    type: "dropdown",
    label: "Country",
    name: "country",
    required: false,
    options: [
      { value: "", label: "Select Country" },
      { value: "india", label: "India" },
      { value: "usa", label: "USA" },
      { value: "canada", label: "Canada" },
    ],
    fullWidth: false,
    sx: { mt: 2, width: "100%",height: '50px', },
  },
  {
    type: "radio",
    label: "Gender",
    name: "gender",
    required: false,
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
  },
  {
    type: "textarea",
    label: "Description",
    name: "bio",
    required: false,
    fullWidth: false,
    sx: { mt: 2 },
  },
  {
    type: "checkbox",
    label: "I accept the terms & conditions",
    name: "termsAccepted",
    required: false,
  },
];

const CommonForm: React.FC = () => {
  
  const initialFormValues: FormValues = {};
  formFields.forEach((field) => {
    if (field.type === "checkbox") initialFormValues[field.name] = false;
    else if (field.type === "number") initialFormValues[field.name] = "";
    else initialFormValues[field.name] = "";
  });

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement; 
    const { name, value, type, checked } = target;

    setFormValues((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "age"
          ? value === ""
            ? ""
            : Number(value)
          : value,
    }));
  };

  const handleDropdownChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! Check console for data.");
    console.log("Submitted values:", formValues);
  };

 
  const renderField = (field: FieldConfig) => {
    switch (field.type) {
      case "text":
        return (
          <CommonTextField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleChange}
            required={field.required}
            fullWidth={field.fullWidth}
            sx={field.sx}
            type={field.name === "email" ? "email" : "text"}
          />
        );

      case "textarea":
        return (
          <CommonTextArea
            key={field.name}
            label={field.label}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleChange}
            required={field.required}
            fullWidth={field.fullWidth}
            sx={field.sx}
            rows={4}
          />
        );

      case "dropdown":
        return (
          <CommonDropdown
            key={field.name}
            label={field.label}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleDropdownChange}
            options={field.options || []}
            required={field.required}
            fullWidth={field.fullWidth}
            sx={field.sx}
          />
        );

      case "radio":
        return (
          <CommonRadioGroup
            key={field.name}
            label={field.label}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleChange}
            options={field.options || []}
            required={field.required}
          />
        );

      case "checkbox":
        return (
          <FormControlLabel
            key={field.name}
            control={
              <CommonCheckbox
                name={field.name}
                checked={formValues[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            }
            label={field.label}
          />
        );

      case "number":
        return (
          <CommonNumberField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleChange}
            required={field.required}
            min={field.min as number}
            max={field.max as number}
            fullWidth={field.fullWidth}
            sx={field.sx}
          />
        );

      case "date":
        return (
          <CommonDatePicker
            key={field.name}
            label={field.label}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleChange}
            required={field.required}
            min={field.min as string}
            max={field.max as string}
            fullWidth={field.fullWidth}
            sx={field.sx}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ p: 4, width: 700 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Dynamic Common Components Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {formFields.map((field) => (
              <Grid item xs={12} key={field.name}>
                {renderField(field)}
              </Grid>
            ))}

            <Grid item xs={12}>
              <button
                type="submit"
                style={{ width: "100%", padding: "10px", fontSize: "16px" }}
              >
                Submit
              </button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Grid>
  );
};

export default CommonForm;
