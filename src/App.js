import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePageContainer from "./components/HomePageContainer/HomePageContainer";
import { Switch, Route } from "react-router-dom";
import EssenUndTrinken from "./pages/EssenUndTrinken/EssenUndTrinken";
import FreizeitUndErholung from "./pages/FreizeitUndErholung/FreizeitUndErholung";
import Details from "./pages/Details/Details";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePageContainer />
        </Route>
        <Route exact path="/freizeitunderholung">
          <FreizeitUndErholung />
        </Route>
        <Route
          exact
          path="/freizeitunderholung/:slug"
          component={Details}
        ></Route>
        <Route exact path="/essenundtrinken">
          {" "}
          <EssenUndTrinken />
        </Route>
        <Route exact path="/essenundtrinken/:slug" component={Details} />
      </Switch>
    </>
  );
}

export default App;
