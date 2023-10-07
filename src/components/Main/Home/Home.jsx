import React from "react";
import AllTypes from "../AllTypes";

const Home = (props) => {
  const types = props.allTypes;

  console.log(types);

  return (
    <div>
      {" "}
      <div>
        <h1>Home</h1>
        <p>
          Welcome to the DND Compendium. This site is a collection of Dungeons
          and Dragons 5th edition information. You can search for a specific
          monster, or you can get a random monster.{" "}
        </p>
        <AllTypes allTypes={types} />
      </div>
    </div>
  );
};

export default Home;
