import React from "react";
import { Box, Grid, Table, TableCell } from "@mui/material";
import { Link } from "@mui/material";

function Nav() {
  return (
    <div className="nav-bar">
      <br />
      <div className="box">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              gap: "15px",
              alignContent: "center",
              justifyContent: "space-around",
            }}
          >
            <Link
              style={{
                border: "1px solid black",
                padding: "4px 4px",
                borderRadius: "5px",
              }}
              underline="hover"
              href="/"
            >
              HOME
            </Link>

            <Link
              style={{
                border: "1px solid black",
                padding: "4px 4px",
                borderRadius: "5px",
              }}
              underline="hover"
              href="/search"
            >
              SEARCH
            </Link>
            <Link
              style={{
                border: "1px solid black",
                padding: "4px 4px",
                borderRadius: "5px",
              }}
              underline="hover"
              href="/random"
            >
              RANDOM
            </Link>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Nav;
