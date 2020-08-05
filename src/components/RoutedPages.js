import React from "react";
import { Route, Switch } from "react-router-dom";
import Between from "../pages/between";
import Thoughts from "../pages/thoughts";
import Tech from "../pages/tech";
import Home from "../pages/home_bits";

const RoutedPages = () => (

    <Switch>
      <Route path={"/between"} exact>
        <Between />
      </Route>
      <Route path={"/inspiration"} exact>
        <Thoughts />
      </Route>
      <Route path={"/tech"} exact>
        <Tech />
      </Route>
      <Route path={"/"}>
        <Home />
      </Route>
    </Switch>
);

export default RoutedPages;
