import React from "react";
import { Typography, Box } from "@mui/material";

import Nav from "./Nav";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header style={{ marginBottom: "20px" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <div className="title">
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
        <div className="search">
          <Searchbar />
        </div>
      </Box>
      <br />
      <div
        className="header-nav"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Nav />
      </div>
    </header>
  );
};

export default Header;
