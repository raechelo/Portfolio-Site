import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  spreadAnimation: {
    animation: "$spreadEffect 1s easeout",
  },
  "@keyframes spreadEffect": {
    "0%": {
      "letter-spacing": "-0.5em",
      opacity: 0,
    },
    "40%": {
      opacity: 0.6,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

const Title = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant='h1'
        style={{
          fontSize: "5rem",
          textTransform: "uppercase",
        }}
        className={classes.spreadAnimation}
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
