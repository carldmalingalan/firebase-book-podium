import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/index";
import NavBar from "./components/NavBar";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import CreateNew from "./components/Book/CreateNew";
import BookDetails from "./components/Book/BookDetails";
import Gallery from "./components/Gallery/";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/book/create" component={CreateNew} />
          <Route path="/book/:id" component={BookDetails} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    );
  }
}

export default App;
