"use client";
import { GridLegacy as Grid } from '@mui/material';

import React from "react";
import {
  
  Paper,
  Typography,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";


type TrafficData = {
  name: string;
  uv: number;
};

const data: TrafficData[] = [
  { name: "A", uv: 100 },
  { name: "B", uv: 180 },
  { name: "C", uv: 140 },
  { name: "D", uv: 220 },
];

export default function TrafficCard() {
  return (
    <Grid item >
      <Paper
        elevation={4}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%", 
        }}
      >
        <Grid container justifyContent="space-between" alignItems="flex-start">
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Daily Traffic
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              2.579{" "}
              <Typography variant="body2" component="span">
                Visitors
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              sx={{ color: "success.main", fontWeight: 600 }}
            >
              ▲ +2.45%
            </Typography>
          </Grid>
        </Grid>

        {/* Responsive chart  */}
        <ResponsiveContainer  width="100%" aspect={1.5}>
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <Bar
              dataKey="uv"
              fill="#7B61FF"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}
