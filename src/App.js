import React from "react";
import BlockComponent from "./BlockComponent";
import Contactpage from "./Contactpage";
import HomePage from "./HomePage";
import LogoComponent from "./LogoComponent";
import Navbar from "./Navbar";
import Page4 from "./Page4";
import Error from "./Error";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/landings" component={BlockComponent}></Route>
        <Route exact path="/pages" component={LogoComponent}></Route>
        <Route exact path="/account" component={Contactpage}></Route>
        <Route exact path="/documentation" component={Page4}></Route>
        <Route exact path="/back" component={HomePage}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
};

export default App;
