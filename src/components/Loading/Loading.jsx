import { HourglassBottomTwoTone } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <Grid alignContent={"center"} justifyContent={"center"}>
        <HourglassBottomTwoTone style={{ position: "fixed" }} />
      </Grid>
    </div>
  );
};

export default Loading;
