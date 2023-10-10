import React from "react";
import { Box, Button, Grid, Table, TableCell } from "@mui/material";
import { Link } from "@mui/material";

function Nav() {
  return (
    <div className="nav-bar">
      <div className="box">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Link
              component={Button}
              variant="contained"
              color="secondary"
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
              component={Button}
              variant="button"
              color="secondary"
              style={{
                border: "1px solid black",
                padding: "4px 4px",
                borderRadius: "5px",
              }}
              underline="hover"
              href="/search"
            >
              ADVANCED SEARCH
            </Link>
            <Link
              component={Button}
              variant="button"
              color="secondary"
              style={{
                border: "1px solid black",
                padding: "4px 4px",
                borderRadius: "5px",
              }}
              underline="hover"
              href="/random"
            >
              RANDOM ENTRY
            </Link>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Nav;
