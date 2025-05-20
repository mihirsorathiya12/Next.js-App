import { Paper, Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sep", value: 20 },
  { name: "Oct", value: 25 },
  { name: "Nov", value: 22 },
  { name: "Dec", value: 30 },
  { name: "Jan", value: 28 },
  { name: "Feb", value: 35 },
];

export default function CustomLineChart() {
  return (
    <Paper elevation={3} sx={{ p: 5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
    
  
    <Box flex={1} >
      <Typography variant="h6" fontWeight={600} gutterBottom>
        This Month
      </Typography>
      <Typography variant="h4" fontWeight={700} color="primary">
        $37.5K
      </Typography>
      <Typography variant="subtitle1" mb={1}>
        Total Spent
      </Typography>
      <Typography variant="body2" color="success.main" mb={3}>
        ▲ +2.45% from last month
      </Typography>
</Box>
    
     
        <ResponsiveContainer width={500} height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
     
      </Box>
    </Paper>
  );
}
