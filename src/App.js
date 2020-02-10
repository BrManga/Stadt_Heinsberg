import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePageContainer from "./components/HomePageContainer/HomePageContainer";
import { Switch, Route } from "react-router-dom";
import EssenUndTrinken from "./pages/EssenUndTrinken/EssenUndTrinken";
import FreizeitUndErholung from "./pages/FreizeitUndErholung/FreizeitUndErholung"
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePageContainer />
        </Route>
        <Route exact path="/freizeitunderholung">
         <FreizeitUndErholung/>
        </Route>
        <Route exact path="/essenundtrinken">
          <EssenUndTrinken />
        </Route>
      </Switch>
    </>
  );
}

export default App;
