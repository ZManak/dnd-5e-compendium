import React, { useContext, useRef, useState } from "react";
import { TextField } from "@mui/material";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <TextField
        id="search-bar"
        label="Search..."
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default Searchbar;
