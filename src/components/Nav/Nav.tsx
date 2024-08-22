import { Button, Grid } from "@mui/material";

const Nav = (): JSX.Element => {
  return (
    <Grid container sm={12} justifyContent='flex-end' p={2}>
      {["about", "projects", "contact"].map((opt) => (
        <Grid ml={1}>
          <Button color='secondary' variant='contained'>
            {opt}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nav;
