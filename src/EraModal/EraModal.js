import { Button, Card, Dialog, Grid, Typography } from "@mui/material";
import React from "react";

const EraModal = ({ open, handleUpdateTheme, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={(_e, reason) => {
        if (reason === "backdropClick") {
          handleClose();
        }
      }}
    >
      <Card sx={{ padding: "24px" }}>
        <Typography>Choose your era</Typography>
        <Grid className="eras-container">
          {[
            "debut",
            "fearless",
            "lover",
            "speaknow",
            "midnights",
            "evermore",
            "folklore",
            "red",
            "1989",
            "reputation",
          ].map((era) => (
            <Button
              variant="contained"
              onClick={() => {
                handleUpdateTheme(era);
                handleClose();
              }}
              className={`era ${era === "1989" ? "seagull" : era}`}
            >
              {era}
            </Button>
          ))}
        </Grid>
      </Card>
    </Dialog>
  );
};

export default EraModal;
