import React from "react";
import "./App.css";
import { StateProvider } from "./store/store.js";
import Home from "./pages/home";
import Monster from "./pages/monster";
import Wallpaper from "./pages/wallpaper";
import Between from "./pages/between";
import Tech from "./pages/tech";
import Thoughts from "./pages/thoughts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <StateProvider>
      <div data-testid="mainApp">
        <Router>
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
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
