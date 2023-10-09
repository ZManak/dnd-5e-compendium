import React from "react";
import { Tabs, Tab } from "@mui/material";

const Sidetabs = () => {
  return (
    <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Abilities" href="/ability-scores" />
        <Tab label="Classes" href="/classes" />
        <Tab label="Conditions" href="/conditions" />
        <Tab label="Equipment" href="/equipment-categories" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </div>
  );
};

export default Sidetabs;
