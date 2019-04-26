import React from "react";
import { Route, Switch } from "react-router-dom";
import People from "./components/People";
import Navbar from './components/Navbar'
import planets from './components/planets'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={People} />
        <Route exact path="/planets" component={planets} />
      </Switch>
    </>
  );
}

export default App;
