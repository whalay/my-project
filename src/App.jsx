import React from "react";
import { Route } from "react-router-dom";

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
      <Route path="/home">
        <Header />
      </Route>
      <Route path="/collection">
        <Collections />
      </Route>
      <Route path="/chart">
        <TopChartDetail />
      </Route>
      <Playing />
    </div>
  );
}

export default App;
