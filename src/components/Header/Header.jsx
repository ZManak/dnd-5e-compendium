import React from "react";
import { Typography } from "@mui/material";
import { TitleRounded } from "@mui/icons-material";

import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div
        className="icon"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          color="black"
          fontFamily={"Old English Text MT"}
          sx={{ fontWeight: "bold" }}
          fontSize={"4rem"}
        >
          DnD Compendium
        </Typography>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
