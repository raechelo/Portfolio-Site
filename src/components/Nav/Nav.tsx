import { Grid } from "@mui/material";
import Button from "../Button/Button";

const Nav = (): JSX.Element => {
  return (
    <Grid container sm={12} justifyContent='flex-end' p={2}>
      {["about", "projects", "contact"].map((opt) => (
        <Grid ml={1}>
          <Button color='secondary' btnText={opt} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Nav;
