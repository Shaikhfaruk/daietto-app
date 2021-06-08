import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DesktopNav from "./components/DesktopNav";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <DesktopNav />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
