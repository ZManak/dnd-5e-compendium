import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeUniqueId } from "@apollo/client/utilities";

const GET_CLASSES = gql`
  query Classes {
    classes {
      index
      name
    }
  }
`;

const GET_CLASS = gql`
  query ExampleQuery($name: String) {
    classes(name: $name) {
      name
      hit_die

      starting_equipment_options {
        choose
        desc
      }

      starting_equipment {
        equipment {
          ... on Pack {
            name
          }
          ... on Gear {
            name
          }
          ... on Tool {
            name
          }
          ... on Ammunition {
            name
          }
          ... on Weapon {
            name
          }
          ... on Armor {
            name
          }
          ... on Vehicle {
            name
          }
          ... on IGear {
            name
          }
        }
        quantity
      }
      proficiencies {
        name
        type
      }
      spellcasting {
        level
        spellcasting_ability {
          full_name
        }
      }
      subclasses {
        name
        subclass_flavor
        desc
      }
      proficiency_choices {
        desc
      }
      spells {
        name
        desc
      }
      multi_classing {
        prerequisites {
          ability_score {
            name
          }
          minimum_score
        }
        proficiencies {
          name
        }
        proficiency_choices {
          desc
        }
      }
    }
  }
`;

function QueryMultiClassing(name) {
  const res1 = useQuery(GET_CLASS, {
    variables: { name: name },
    fetchPolicy: "network-only",
    returnPartialData: true,
  });
  const res2 = useQuery(GET_CLASSES, {
    fetchPolicy: "network-only",
    returnPartialData: true,
  });
  return { res1, res2 };
}

const Classes = () => {
  const classes = QueryMultiClassing("Monk");
  const { loading, error, data } = classes.res1;
  console.log("Data" + data);
  const classList = classes.res1;
  console.log(classList);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {classList.data.classes.map(
        ({
          name,
          hit_die,
          starting_equipment,
          starting_equipment_options,
          proficiencies,
          spellcasting,
          subclasses,
          proficiency_choices,
          spells,
          multi_classing: {
            prerequisites,
            proficiencies: m_proficiencies,
            proficiency_choices: m_proficiency_choices,
          },
        }) => (
          <div key={makeUniqueId("id")}>
            <Card
              variant="outlined"
              key={makeUniqueId("card")}
              style={{ border: "2px solid black", maxWidth: "80%" }}
              maxWidth="80%"
            >
              <CardContent>
                <Typography variant="h3">{name}</Typography>
                <p>{hit_die}</p>
                <ul>
                  {starting_equipment?.map(
                    ({ equipment: { name }, quantity }) => (
                      <li key={makeUniqueId("rnd")}>
                        <h4>{name}</h4>
                        <p>{quantity}</p>
                      </li>
                    )
                  )}
                </ul>
                <div>
                  <h4>Starting Equipment Options</h4>
                  <ul>
                    {starting_equipment_options?.map(({ choose, desc }) => (
                      <li key={makeUniqueId("rnd")}>
                        <h4>{choose}</h4>
                        <p>{desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul>
                  {proficiencies.map(({ name, type }) => (
                    <li key={makeUniqueId("rnd")}>
                      <h4>{name}</h4>
                      <p>{type}</p>
                    </li>
                  ))}
                </ul>
                <ul>
                  {spellcasting?.map(
                    ({ level, spellcasting_ability: { full_name } }) => (
                      <li key={makeUniqueId("rnd")}>
                        <h4>{level}</h4>
                        <p>{full_name}</p>
                      </li>
                    )
                  )}
                </ul>
                <ul>
                  {subclasses?.map(({ name, subclass_flavor, desc }) => (
                    <li key={makeUniqueId("rnd")}>
                      <h4>{name}</h4>
                      <p>{subclass_flavor}</p>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
                <ul>
                  {proficiency_choices?.map(({ desc }) => (
                    <li key={makeUniqueId("rnd")}>
                      <h4>{desc}</h4>
                    </li>
                  ))}
                </ul>
                <ul>
                  {spells?.map(({ name, desc }) => (
                    <li key={makeUniqueId("rnd")}>
                      <h4>{name}</h4>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
                <ul>
                  <h4>Multi Classing</h4>
                  {prerequisites?.map(
                    ({ ability_score: { name }, minimum_score }) => (
                      <li key={makeUniqueId("rnd")}>
                        <h4>Reqs</h4>
                        <p>{name}</p>
                        <p>{minimum_score}</p>
                      </li>
                    )
                  )}
                  {m_proficiencies?.map(({ name }) => (
                    <ul>
                      <li key={makeUniqueId("rnd")}>
                        <h4>Proficiencies</h4>
                        <p>{name}</p>
                      </li>
                    </ul>
                  ))}
                  {m_proficiency_choices?.map(({ desc }) => (
                    <ul key={makeUniqueId("choices")}>
                      <li key={makeUniqueId("rnd")}>
                        <h4>Description</h4>
                        <p>{desc}</p>
                      </li>
                    </ul>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )
      )}
    </div>
  );
};

export default Classes;

// Path: src/components/Main/Classes/Classes.jsx
