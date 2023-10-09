import Loading from "../../Loading/Loading";
import { Grid, Link, Typography } from "@mui/material";

const AllTypes = (props) => {
  let names = props.allTypes;

  const goodNames = [];
  console.log(names);

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
      <Grid container justifyContent={"space-around "} spacing={3}>
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
    <Loading />
  );
};

export default AllTypes;
