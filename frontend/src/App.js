import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tiles from "./components/Tiles/Tiles";
import EditTask from "./components/EditTask/EditTask";
import EditTile from "./components/EditTile/EditTile";
import AddTask from "./components/AddTask/AddTask";
import AddTile from "./components/AddTile/AddTile";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Router>
      <Navbar />

        <Switch>
          <Route exact path="/" component={Tiles} />
          <Route exact path="/task/edit/:taskId" component={EditTask} />
          <Route exact path="/tile/edit/:tileId" component={EditTile} />
          <Route exact path="/task/add" component={AddTask} />
          <Route exact path="/tile/add" component={AddTile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
