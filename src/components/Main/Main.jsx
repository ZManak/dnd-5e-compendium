import React, { useState, useEffect } from "react";
import Home from "../Main/Home";
import Sidetabs from "./Sidetabs/Sidetabs";

const Main = () => {
  const [allTypes, setAllTypes] = useState([]);
  //const { name } = useParams();

  useEffect(() => {
    const fetchAllTypes = async () => {
      const data = await fetch("https://www.dnd5eapi.co/api");
      const response = await data.json();
      setAllTypes(Object.keys(response));
    };
    fetchAllTypes();
  }, []);

  return (
    <div className="main" style={{ display: "flex" }}>
      <Home allTypes={allTypes} />
    </div>
  );
};

export default Main;
