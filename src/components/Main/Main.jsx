import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Home from "../Main/Home";

import Loading from "../Loading/Loading";

const Main = () => {
  const [allTypes, setAllTypes] = useState();
  //const { name } = useParams();

  useEffect(() => {
    const fetchAllTypes = async () => {
      const data = await fetch("https://www.dnd5eapi.co/api");
      const response = await data.json();
      setAllTypes(Object.keys(response));
    };
    fetchAllTypes();
  }, []);

  return allTypes ? (
    <div className="main" style={{ display: "flex" }}>
      <Home allTypes={allTypes} />
    </div>
  ) : (
    <div
      className="main"
      style={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        minWidth: "500px",
        minHeight: "100%",
        alignContent: "center",
      }}
    >
      <Grid container flexGrow={1} width={"100%"}>
        <Loading />
      </Grid>
    </div>
  );
};

export default Main;
