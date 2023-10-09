import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_ABILITY = gql`
  query ExampleQuery($name: String!) {
    abilityScores(full_name: $name) {
      full_name
      desc
      skills {
        name
        desc
      }
    }
  }
`;

const Ability = () => {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_ABILITY, {
    variables: { name: name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return data.abilityScores.map(({ full_name, name, desc, skills }) => {
    return (
      <div>
        <h3>{full_name}</h3>
        <p>{desc}</p>
        <ul>
          {skills.map(({ name, desc }) => (
            <li key={name}>
              <h4>{name}</h4>
              <p>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  });
};

export default Ability;
