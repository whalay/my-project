import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import SideNav from "./components/SideNav";
import Playing from "./components/Playing";
import Collections from "./pages/Collections";
import TopChartDetail from "./pages/TopChartDetail";

function App() {
  return (
    <div>
      <Navbar />

      <SideNav />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Header />
        </Route>
        <Route path="/collection">
          <Collections />
        </Route>
        <Route path="/chart/:detailId">
          <TopChartDetail />
        </Route>
      </Switch>
      <Playing />
    </div>
  );
}

export default App;
