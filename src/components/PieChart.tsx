import { Paper, Typography } from "@mui/material";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function CustomPieChart() {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
    <Typography variant="h6" fontWeight={600} gutterBottom>
              Your Pie Chart
            </Typography>
      <ResponsiveContainer width={350} height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}
