import { Grid, Paper, Typography } from "@mui/material";

const data = [
  { title: "Earnings", value: "$350.4" },
  { title: "Spent this month", value: "$642.39" },
  { title: "Sales", value: "$574.34" },
  { title: "Your Balance", value: "$1,000" },
  { title: "New Tasks", value: "154" },
  { title: "Total Projects", value: "2935" },
];

export default function DashboardCards() {
  return (
    <Grid container spacing={6} sx={{ py: 1.5 }}>
      {data.map((item, index) => (
        <Grid >
          <Paper elevation={8} sx={{ p: 3 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
            <Typography variant="h6" fontWeight={600 }>
              {item.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
