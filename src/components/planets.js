import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Grid, GridColumn } from "semantic-ui-react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Axios.get(`https://swapi.co/api/planets/`).then(res => {
      setPeople(res.data.results);
    });
  }, []);

  const renderPeople = () => {
    return people.map(p => {
      return (
        <>
          <Card fluid>
            <Grid columns={5} divided>
              <Grid.Row>
                <GridColumn>
                  {p.name}
                  <br />
                  <br />
                </GridColumn>
                <GridColumn>
                  climate:
                  {p.climate}
                </GridColumn>
                <GridColumn>
                  gravity:
                  {p.gravity}
                </GridColumn>
                <GridColumn>
                  rotation_period:
                  {p.rotation_period}
                </GridColumn>
                <GridColumn>
                  population:
                  {p.population}
                </GridColumn>
              </Grid.Row>
            </Grid>
          </Card>
        </>
      );
    });
  };

  return <>{renderPeople()}</>;
};

export default People;
