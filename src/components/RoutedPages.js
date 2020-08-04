import React from "react";
import { Route, Switch } from "react-router-dom";
import Wallpaper from "../pages/wallpaper";
import Monster from "../pages/monster";
import Between from "../pages/between";
import Thoughts from "../pages/thoughts";
import Tech from "../pages/tech";
import Home from "../pages/home_bits";

const RoutedPages = () => (

    <Switch>
      <Route path={"/wallpaper"} exact>
        <Wallpaper />
      </Route>
      <Route path={"/monster"} exact>
        <Monster />
      </Route>
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
