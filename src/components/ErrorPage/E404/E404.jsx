import React from "react";
import { Alert, Typography } from "@mui/material";
import { Box } from "@mui/system";

const E404 = () => {
  return (
    <div className="e404">
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Alert variant="outlined" severity="error">
          <strong>404</strong>
          <Typography>
            {" "}
            - The page you are looking for cannot be found.
          </Typography>
        </Alert>
      </Box>
    </div>
  );
};

export default E404;
