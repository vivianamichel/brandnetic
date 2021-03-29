/*App.js*/
import React, { Component } from "react";
import "./App.css";
import ConnectPage from "./connect.js";
import ProfilePage from "./profile.js";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={ConnectPage} />
       <Route exact path="/profile.js" component={ProfilePage} />
      </Router>
    );
  }
}

export default App;
