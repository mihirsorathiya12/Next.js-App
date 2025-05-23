import React, { useState } from 'react';
import {
  Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup,
  InputLabel, MenuItem, Radio, RadioGroup, Select,
  SelectChangeEvent,
  TextField, Typography
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';

const GoogleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    country: '',
    gender: '',
    skills: { html: false, css: false, js: false }
  });

  // TextField, RadioGroup ke liye handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // MUI Select ke liye alag handler (SelectChangeEvent)
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Checkbox ke liye handler
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      skills: { ...prev.skills, [name]: checked }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert("Form submitted successfully!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Google Style Form
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            sx={{ height: 60 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            sx={{ height: 120 }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Select Country</InputLabel>
            <Select
              name="country"
              value={formData.country}
              onChange={handleSelectChange}
              label="Select Country"
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <Typography variant="subtitle1">Gender</Typography>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormGroup row>
            <Typography variant="subtitle1" sx={{ mr: 2, alignSelf: 'center' }}>
              Skills:
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.skills.html}
                  onChange={handleCheckboxChange}
                  name="html"
                />
              }
              label="HTML"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.skills.css}
                  onChange={handleCheckboxChange}
                  name="css"
                />
              }
              label="CSS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.skills.js}
                  onChange={handleCheckboxChange}
                  name="js"
                />
              }
              label="JavaScript"
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: '100%', height: 50 }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GoogleForm;
