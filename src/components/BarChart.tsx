"use client";
import { GridLegacy as Grid } from '@mui/material';

import React from "react";
import { Paper, Typography,  Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


type RevenueData = {
  day: string;
  revenue: number;
};

const data: RevenueData[] = [
  { day: "17", revenue: 300 },
  { day: "18", revenue: 400 },
  { day: "19", revenue: 350 },
  { day: "20", revenue: 500 },
  { day: "21", revenue: 450 },
  { day: "22", revenue: 600 },
];

export default function CustomBarChart() {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6" fontWeight={600}>
            Weekly Revenue
          </Typography>
        </Grid>

        <Grid item>
          <Box sx={{ width: "100%", height: 310 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#82ca9d" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
