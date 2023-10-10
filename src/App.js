import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import { Search } from "./components/Main/Search";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "grid",
          flexGrow: 1,
          gap: "15px",
          justifyItems: "center",
        }}
      >
        {/* <Header /> */}
        <Main />
        {/* '<Footer />' */}
      </Box>
    </div>
  );
}

export default App;
