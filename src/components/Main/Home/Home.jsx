import React from "react";
import AllTypes from "../AllTypes";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Home = (props) => {
  const types = props.allTypes;

  console.log(types);

  return (
    <div>
      {" "}
      <div>
        <Box
          display={"grid"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ flexGrow: 1, padding: "3%" }}
        >
          <Typography>
            Welcome to the DND Compendium! This site is a collection of Dungeons
            and Dragons 5th edition information. You can search for a specific
            entry, or you can get a random one from a selected category.{" "}
          </Typography>
          <AllTypes allTypes={types} />
        </Box>
      </div>
    </div>
  );
};

export default Home;
