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

const rows = [
  { name: "Horizon UI PRO", progress: "71.5%", quantity: 2458, date: "12 Jan 2021" },
  { name: "Horizon UI Free", progress: "10.5%", quantity: 1485, date: "27 Feb 2021" },
  { name: "Weekly Update", progress: "21.5%", quantity: 1034, date: "13 Mar 2021" },
];

export default function CheckTable() {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
       <Typography variant="h6" fontWeight={600} gutterBottom>
              Check Table
            </Typography>
      <TableContainer >
        <Table sx={{ width: 450, height: 250,  }}>
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
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
    </Paper>
  );
}
