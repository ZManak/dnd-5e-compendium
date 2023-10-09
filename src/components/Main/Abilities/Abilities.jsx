import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  ListItem,
  List,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ABILITIES } from "../Search/Search";
import { ExpandMoreOutlined } from "@mui/icons-material";

/* const [ability, setAbility] = useState({ count: 0, results: [] }); // [ability, setAbility]
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
  console.log(abilityName2); */

/* const GET_ABILITIES = gql`
  query ExampleQuery($name: String!) {
    abilityScores(name: $name) {
      full_name
      desc
      skills {
        name
        desc
      }
    }
  }
`; */

const Abilities = () => {
  const name = useParams();

  console.log(name);

  const { loading, error, data } = useQuery(GET_ABILITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <section className="abilities-expand">
      {/* <div> */}
      {/* <h2>Abilities</h2>
        <div>
          {data.abilityScores.map(({ full_name, name }) => (
            <div key={name}>
              <Link to={`/ability/${name}`}>{full_name}</Link>
            </div>
          ))}
        </div>
           </div> */}
      <div>
        <Box
          sx={{
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center",
            width: "80%",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          {data.abilityScores.map(({ full_name, desc, skills }) => (
            <div key={full_name}>
              <Accordion
                sx={{
                  display: "grid",
                  gap: "5px",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined style={{ color: "white" }} />}
                  id="panel1bh-header"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    borderColor: "white",
                    borderWidth: "1px 0px",
                    borderRadius: "5px",
                    borderStyle: "solid",
                    borderCollapse: "collapse",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      width: "33%",
                    }}
                  >
                    {full_name.toUpperCase()}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "grid",
                    columns: "1fr 1fr",
                    gridRow: "auto",
                    gap: "20px",
                    justifyItems: "center",
                    alignItems: "top",
                    width: "90%",
                    marginBlockStart: "20px",
                    marginBlockEnd: "20px",
                    marginInlineStart: "auto",
                    marginInlineEnd: "auto",
                  }}
                >
                  <div>
                    <Typography variant="body1">{desc}</Typography>
                  </div>
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: "bolder " }}>
                      SKILLS
                    </Typography>
                    <ul>
                      {skills.map(({ name, desc }) => (
                        <List key={name}>
                          <ListItem
                            variant="paragraph"
                            style={{ fontWeight: "bold" }}
                          >
                            {name}
                          </ListItem>
                          <ListItem>{desc}</ListItem>
                        </List>
                      ))}
                    </ul>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default Abilities;
