import React from "react";
import { Typography, BottomNavigation } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <BottomNavigation></BottomNavigation>
      <Typography
        variant="h6"
        align="center"
        color="black"
        fontFamily={"Old English Text MT"}
        sx={{ fontWeight: "bold" }}
        fontSize={"2rem"}
      >
        ZManak 2023
      </Typography>
    </footer>
  );
};

export default Footer;
