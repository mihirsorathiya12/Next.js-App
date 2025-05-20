"use client";
import { GridLegacy as Grid } from '@mui/material';

import React from "react";
import {  Paper, Typography } from "@mui/material";

type CardData = {
  title: string;
  value: string;
};


const data: CardData[] = [
  { title: "Earnings", value: "$350.4" },
  { title: "Spent this month", value: "$642.39" },
  { title: "Sales", value: "$574.34" },
  { title: "Your Balance", value: "$1,000" },
  { title: "New Tasks", value: "154" },
  { title: "Total Projects", value: "2935" },
];

export default function DashboardCards() {
  return (
    <Grid container spacing={3} sx={{ py: 2 }}>
      {data.map((item: CardData, index: number) => (
        <Grid item xs={4} sm={2} md={1.95} key={index}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              {item.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
