import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FilmPage from "./pages/FilmPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/filmpage/:id" component={FilmPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
