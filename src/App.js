import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePageContainer from "./components/HomePageContainer/HomePageContainer";
import { Switch, Route } from "react-router-dom";
import FreizeitAndErholung from "./pages/FreizeitundErholung/FreizeitUndErholung";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePageContainer />
        </Route>
        <Route exact path="/freizeitunderholung">
          <FreizeitAndErholung />
        </Route>
      </Switch>
    </>
  );
}

export default App;
