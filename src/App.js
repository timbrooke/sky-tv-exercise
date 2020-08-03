import React from "react";
import "./App.css";
import Home from "./pages/home";
import Monster from "./pages/monster";
import Wallpaper from "./pages/wallpaper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div data-testid="mainApp">
    <Router>
      <Switch>
        <Route path={"/wallpaper"} exact >
          <Wallpaper />
        </Route>
        <Route path={"/monster"} exact >
          <Monster />
        </Route>
        <Route path={"/"}  >
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
