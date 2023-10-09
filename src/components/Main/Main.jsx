import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Main/Home";
import Abilities from "../Main/Abilities";
import Ability from "../Main/Abilities/Ability";
import { Search } from "../Main/Search";
import Random from "../Main/Random";
import Classes from "../Main/Classes";

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
    <div>
      <Home allTypes={allTypes} />
      {/* <Routes>
        <Route path="/" element={<Home allTypes={allTypes} />} />
        <Route path="/abilities" element={<Abilities />} />
        <Route path={"/ability/"}>
          <Route path={":name"} element={<Ability />} />
        </Route>
        <Route path="/search" element={<Search />} />
        <Route path={"/search/"}>
          <Route path={":type"} element={<Abilities />} />
        </Route>
        <Route path="/random" element={<Random />} />
        <Route path="/classes" element={<Classes />} />
      </Routes> */}
    </div>
  );
};

export default Main;
