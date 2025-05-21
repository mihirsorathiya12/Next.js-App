import {  Button } from '@mui/material';
import { useRouter } from 'next/router';
import { GridLegacy as Grid } from '@mui/material';
export default function Home() {
  const router = useRouter();

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      


      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/login')}
          sx={{ mr: 2 }}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push('/register')}
        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
}
