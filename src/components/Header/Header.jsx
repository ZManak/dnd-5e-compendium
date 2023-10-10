import React from "react";
import { Typography, Box } from "@mui/material";

import Nav from "./Nav";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header
      style={{
        margin: "10px 10px",
        borderBottom: "2px solid black",
      }}
    >
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
            fontSize={"3rem"}
          >
            DnD Compendium
          </Typography>
        </div>
        <div className="search">
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"10px"}
            paddingBottom={"10px"}
          >
            <Searchbar />
            <Nav />
          </Box>
        </div>
      </Box>
    </header>
  );
};

export default Header;
