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

interface FormValues {
  email: string;
  password: string;
  bio: string;
  country: string;
  gender: string;
  termsAccepted: boolean;
  age: number | ""; // age can be number or empty string
  birthDate: string; // <-- Add birthDate here as string (yyyy-mm-dd)
}

const countryOptions = [
  { value: "", label: "Select Country" },
  { value: "india", label: "India" },
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const CommonForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
    bio: "",
    country: "",
    gender: "",
    termsAccepted: false,
    age: "",       
    birthDate: "",  
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleDropdownChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! Check console for data.");
    console.log("Submitted values:", formValues);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ p: 4, width: 700 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Common Components
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CommonTextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                type="email"
                required
                 fullWidth={false}
                 sx={{ mt: 3 }}
              />
            </Grid>

            <Grid item xs={12}>
              <CommonDatePicker
                label="Birth Date"
                name="birthDate"
                value={formValues.birthDate}
                onChange={handleChange}
                required
                min="1900-01-01"
                max={new Date().toISOString().split("T")[0]} 
              />
            </Grid>

            <Grid item xs={12}>
              <CommonNumberField
                label="Age"
                name="age"
                value={formValues.age}
                onChange={handleChange}
                required
                min={0}
                max={100}
                fullWidth={false}
                sx={{ mt: 5 }}
              />
            </Grid>

            <Grid item xs={12}>
              <CommonDropdown
                label="Country"
                name="country"
                value={formValues.country}
                onChange={handleDropdownChange}
                options={countryOptions}
                 fullWidth={false}
                sx={{ mt: 2 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <CommonRadioGroup
                label="Gender"
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
                options={genderOptions}
              />
            </Grid>
            
            <Grid item xs={12}>
              <CommonTextArea
                label="Description"
                name="description"
                value={formValues.bio}
                onChange={handleChange}
                rows={4}
                 fullWidth={false}
                 sx={{ mt: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <CommonCheckbox
                    name="termsAccepted"
                    checked={formValues.termsAccepted}
                    onChange={handleCheckboxChange}
                  />
                }
                label="I accept the terms & conditions"
              />
            </Grid>

            <Grid item xs={12}>
              
              <button type="submit" style={{ width: "100%", padding: "10px", fontSize: "16px" }}>
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
