import React from "react";
import "./App.css";
import { StateProvider } from "./store/store.js";
import MainMenu from "./components/MainMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MonsterPage from "./pages/monster"

function App() {
  return (
    <StateProvider>
      <div data-testid="mainApp">
        <Router>
          <Route path={["/", "/between", "/technology", "/inspiration"]} exact>
            <MainMenu />
          </Route>
          <Route path={"/monster"} exact>
            <MonsterPage />
          </Route>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
