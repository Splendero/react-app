import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { TitlePage } from "./components/TitlePage";
import { Create } from "./components/Create";
import { Rules } from "./components/Rules";

function App() {
  let players = ["Bahman", "Brett"];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TitlePage
            title="War"
            subtitle="Choose your player"
            names={players}
          />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
