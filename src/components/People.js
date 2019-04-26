import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "semantic-ui-react";

const People = () => {
  const [people, setPeople] = useState([]);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    Axios.get(`https://swapi.co/api/people`).then(res => {
      setPeople(res.data.results);
    });
  }, []);

  useEffect(() => {
    Axios.get(`https://swapi.co/api/people`).then(res => {
      let homeworld = res.data.homeworld;
      Axios.get(`${homeworld}`).then(res1 => {
        setPlace(res1.data.results);
      });
    });
  });

  const renderPlace = () => {
    return place.map(p => {
      return <Card>{p}</Card>;
    });
  };

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

  return (
    <>
      <Card>{renderPeople()}</Card>
      <Card>{renderPlace()}</Card>
    </>
  );
};

export default People;
