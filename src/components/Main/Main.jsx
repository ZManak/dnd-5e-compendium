import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "../Main/Home";
import AbilitiesCards from "../Main/AbilitiesCard";
import Search from "../Main/Search";
import Random from "../Main/Random";

const Main = () => {
  const [allTypes, setAllTypes] = useState([]);
  console.log();
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
      <a href="/">Home</a>
      <a href="/search">Search</a>
      <a href="/random">Get Random</a>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<Home allTypes={allTypes} />} />
        <Route path={"/search/"}>
          <Route path={":type"} element={<AbilitiesCards />} />
        </Route>
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
};

export default Main;
