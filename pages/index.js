import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1"> home </Typography>
          <Link href="/create">create a new card</Link>
        </Grid>
      </Grid>
    </Container>
  );
}