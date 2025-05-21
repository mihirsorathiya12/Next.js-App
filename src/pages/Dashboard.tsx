"use client";
import { GridLegacy as Grid } from '@mui/material';
import React from "react";
import {
  Typography,
  Container,
  Paper,
} from "@mui/material";
import DashboardCards from "../components/DashboardCards";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import CheckTable from "../components/CheckTable";
import TrafficCard from "../components/TrafficCard";

export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ py:7}}>
     
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Main Dashboard
      </Typography>

      
      <Grid container spacing={4} mb={2} style={{marginLeft:"0"}} sx={{ py:7}}>
        <DashboardCards />
      </Grid>

    
      <Grid container spacing={4} mb={5}>
        <Grid item xs={12} md={8}>
          <Paper >
            <LineChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>
            <BarChart />
          </Paper>
        </Grid>
      </Grid>

      
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={6} lg={6}>
          <Paper >
            <CheckTable />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Paper>
          <TrafficCard />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Paper >
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
