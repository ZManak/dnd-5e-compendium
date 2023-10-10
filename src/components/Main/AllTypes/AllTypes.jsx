import { useEffect } from "react";
import Loading from "../../Loading/Loading";
import { Grid, Link, Typography } from "@mui/material";

const AllTypes = (props) => {
  let names = props.allTypes;
  let goodNames = [];

  let types = names.map((entry) => {
    let capEntry = entry.charAt(0).toUpperCase() + entry.slice(1);
    return capEntry.replace(/_/g, " ");
  });

  let cleanNames = types.forEach((entry) => {
    let capEntry = entry.charAt(0).toUpperCase() + entry.slice(1);
    let noBar = capEntry.replaceAll("-", " ");
    goodNames.push(noBar);
  });

  console.log(cleanNames);

  return types !== "loading" ? (
    <div>
      <h2>All Categories</h2>
      <Grid container justifyContent={"space-around "} spacing={1}>
        {names.map((entry, i) => {
          return (
            <Grid item xs={"3"} md={"3"} sm={"3"} key={entry}>
              <Link href={`/${entry}`}>
                <Typography>{goodNames[i]}</Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  ) : (
    <div
      style={{
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
        zindex: "9999",
      }}
    >
      <Loading />
    </div>
  );
};

export default AllTypes;
