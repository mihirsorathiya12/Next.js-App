"use client";
import { GridLegacy as Grid } from '@mui/material';
import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  
} from "@mui/material";


type RowData = {
  name: string;
  progress: string;
  quantity: number;
  date: string;
};


const rows: RowData[] = [
  { name: "Horizon UI PRO", progress: "71.5%", quantity: 2458, date: "12 Jan 2021" },
  { name: "Horizon UI Free", progress: "10.5%", quantity: 1485, date: "27 Feb 2021" },
  { name: "Weekly Update", progress: "21.5%", quantity: 1034, date: "13 Mar 2021" },
];

export default function CheckTable() {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Grid container direction="column" spacing={2}>
        {/* Title */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight={600}>
            Check Table
          </Typography>
        </Grid>

        {/* Table */}
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project</TableCell>
                  <TableCell>Progress</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: RowData, idx: number) => (
                  <TableRow key={idx}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.progress}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
}
