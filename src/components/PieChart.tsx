"use client";
import { GridLegacy as Grid } from '@mui/material';

import React from "react";
import {  Paper, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


type PieDataItem = {
  name: string;
  value: number;
};


const data: PieDataItem[] = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
];

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28"];

export default function CustomPieChart() {
  return (
    <Grid item >
      <Paper elevation={4} sx={{ p: 3, height: "100%" }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Your Pie Chart
        </Typography>
        {/* Responsive auto height */}
        <ResponsiveContainer width="100%" aspect={1.2}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={80}
              label
              fill="#8884d8"
            >
              {data.map((entry: PieDataItem, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}
