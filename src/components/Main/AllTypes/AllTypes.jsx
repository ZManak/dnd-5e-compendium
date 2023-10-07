import React from "react";

const AllTypes = (props) => {
  let names = props.allTypes;

  console.log(names);

  const types = names.map((type) => {
    return (
      <div>
        <a href={`http://localhost:3000/search/${type}`}>{type}</a>
        {/*<a href={`https://www.dnd5eapi.co/api/${type}`}>{type}</a>*/}
      </div>
    );
  });

  return (
    <div>
      <h2>All Types</h2>
      <div>{types}</div>
    </div>
  );
};

export default AllTypes;
