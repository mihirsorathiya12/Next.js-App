import { Grid, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
      <Grid >
        <Typography variant="h3" align="center" color="primary">
          Welcome to MUI Grid Layout
        </Typography>
      </Grid>
      <Grid>
        <Button variant="contained" color="secondary" onClick={() => router.push('/Dashboard')}>
          Go to Dashboard Page
        </Button>
      </Grid>
    </Grid>
  );
}
