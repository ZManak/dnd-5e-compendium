import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AbilitiesCards = () => {
  const [ability, setAbility] = useState({ count: 0, results: [] }); // [ability, setAbility]
  const { type } = useParams();

  console.log(type);

  useEffect(() => {
    const getAbility = async () => {
      const data = await fetch(`https://www.dnd5eapi.co/api/${type}`);
      const response = await data.json();
      console.log(response);
      setAbility(response);
    };
    getAbility();
  }, [type]);

  const abilityName = ability?.results;
  const abilityName2 = abilityName.map((ability, i) => {
    return (
      <div key={i}>
        <a href={`http://localhost:3000/cat/ability-types/${ability.name}`}>
          {abilityName[i].name}
        </a>
      </div>
    );
  });
  console.log(abilityName);
  console.log(abilityName2);

  return (
    <div>
      <h1>{type}</h1>
      <h2>{abilityName2}</h2>
    </div>
  );
};

export default AbilitiesCards;
