import { Paper, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
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
       <Typography variant="h6" fontWeight={600} gutterBottom>
              Weekly Revenue
            </Typography>
      <ResponsiveContainer width={590} height={310}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#82ca9d" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
