import React, { Component } from 'react';
import Showmovies from './components/Moviespage/Showmovies'
// import Showdirectors from './components/Directorpage/Showdirectors'
import homepage from './components/main/homepage'
import './App.css'
import { Route, BrowserRouter, Switch, withRouter } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <homepage.Header />
          <homepage.Body />
          <Switch>
            <Route path="/movies" component={Showmovies} exact />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
            /* <Route path="/directors" component={Showdirectors} exact /> */