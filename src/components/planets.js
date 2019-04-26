import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "semantic-ui-react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Axios
    .get(`https://swapi.co/api/planets/`)
    .then(res => {
      setPeople(res.data.results);
    });
  }, []);

  const renderPeople = () => {
    return people.map(p => {
      return (
        <>
          <Card.Group centered raised>
            <Card>
            {p.name}
            <Card.Content>

            <h3>
            {p.climate}
            </h3>
            <h3>
            {p.gravity}
            </h3>
            <h3>
            {p.rotation_period}
            </h3>
            <h3>
            {p.population}
            </h3>
            <h3>
            {p.residents}
            </h3>
            </Card.Content>
            </Card>
          </Card.Group>
        </>
      );
    });
  };

  return <>{renderPeople()}</>;
};

export default People;