import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ABILITIES = gql`
  query Abilities {
    abilityScores {
      full_name
      desc
      skills {
        name
        desc
      }
    }
  }
`;

const Search = () => {
  return <div>Search</div>;
};

export { Search, GET_ABILITIES };
