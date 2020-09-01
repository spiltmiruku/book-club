import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import History from "./Components/History/History";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/previousbooks" component={History} />
    {/* <Route path='/nominate' component={About} />
        <Route path='/hostmeeting' component={Contact} /> */}
  </Switch>
);
