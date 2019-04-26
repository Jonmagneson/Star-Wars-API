import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "semantic-ui-react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Axios.get(`https://swapi.co/api/people`).then(res => {
      setPeople(res.data.results);
    });
  }, []);

  const renderPeople = () => {
    return people.map(p => {
      return (
        <>
          <Card.Group centered raised>
            <Card>{p.name}</Card>
          </Card.Group>
        </>
      );
    });
  };

  return <>{renderPeople()}</>;
};

export default People;
