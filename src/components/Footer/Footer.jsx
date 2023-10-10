import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "10px",
        minHeight: "5vh",
        width: "100%",
      }}
    >
      <div>
        <Typography align="center" color="black">
          Powered by DnD5eAPI
        </Typography>
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
      </div>
    </footer>
  );
};

export default Footer;
