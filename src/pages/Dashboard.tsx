import { Grid } from '@mui/material';
import { Typography, Container, Paper } from "@mui/material";
import DashboardCards from "../components/DashboardCards";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import CheckTable from "../components/CheckTable";
import TrafficCard from "../components/TrafficCard";

export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Main Dashboard
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={4} mb={4}>
        <DashboardCards />
      </Grid>

      {/* Line Chart + Stat */}
      <Grid container spacing={8} mb={5}>
        <Grid > 
            <LineChart />
        </Grid>

        <Grid >
            <BarChart />
        </Grid>
      </Grid>

      {/* Table + Pie Chart */}
      <Grid container spacing={8}>
        <Grid >
            <CheckTable />
        </Grid>

         <Grid >
        
            <TrafficCard />
        </Grid>
        <Grid >
            <PieChart />
        </Grid>
        
      </Grid>
    </Container>
  );
}
