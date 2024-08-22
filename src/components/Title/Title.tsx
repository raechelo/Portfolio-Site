import { Typography } from "@mui/material";
import theme from "../../styles/theme";

const Title = (): JSX.Element => {
  return (
    <>
      <Typography
        variant='h1'
        style={{
          fontSize: "5rem",
          textTransform: "uppercase",
        }}
      >
        hi, i'm raechel
      </Typography>
      <Typography variant='h2'>
        software developer
        <span style={{ color: theme.palette.primary.main }}>/</span>
        designer
      </Typography>
    </>
  );
};

export default Title;
