import Abilities from "./Abilities";
import { ApolloClient } from "@apollo/client";

export default {
  title: "Example/Abilities",
  component: Abilities,
  parameters: {},
  tags: ["autodocs"],
};

export const Example = {
  args: {
    client: new ApolloClient({
      uri: "https://www.dnd5eapi.co/graphql",
    }),
  },
};
