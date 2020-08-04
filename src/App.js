import React from "react";
import "./App.css";
import { StateProvider } from "./store/store.js";
import MainMenu from "./components/MainMenu";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <StateProvider>
      <div data-testid="mainApp">
        <Router>
          <MainMenu />
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
