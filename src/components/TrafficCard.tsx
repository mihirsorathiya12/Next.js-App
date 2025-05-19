import { Box, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", uv: 100 },
  { name: "B", uv: 180 },
  { name: "C", uv: 140 },
  { name: "D", uv: 220 },
];

export default function TrafficCard() {
  return (
    <Box
    
      sx={{
        
        p: 2,
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
        width: 450,
        height:320,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Typography variant="body2" color="text.secondary">
            Daily Traffic
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            2.579 <Typography variant="body2" component="span">Visitors</Typography>
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: "success.main", fontWeight: 600 }}
        >
          ▲ +2.45%
        </Typography>
      </Box>
<Box sx={{ mt: 0, ml: 8 }}>
      <ResponsiveContainer width={300} height={180}>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <Bar dataKey="uv" fill="#7B61FF" radius={[10, 10, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
      </Box>
    </Box>
  );
}
