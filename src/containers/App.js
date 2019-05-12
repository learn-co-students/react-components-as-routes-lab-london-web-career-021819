import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Movies from "../components/Movies";

const App = props => {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div>
        <Switch>
          <Route path="/actors" render={() => <Actors />} />
          <Route path="/directors" render={() => <Directors />} />
          <Route path="/movies" render={() => <Movies />} />
          <Route path="/" component={() => <Home />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
