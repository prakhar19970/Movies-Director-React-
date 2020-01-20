import React, { Component } from 'react';
import Showmovies from './components/Moviespage/Showmovies'
import Showdirectors from './components/Directorpage/Showdirectors'
import Homepage from './components/main/homepage'
import Addnewmovie from './components/Moviespage/Addnewmovie'
import Addnewdirector from './components/Directorpage/Addnewdirector'
import Singledirector from './components/Directorpage/Singledirector'
import Singlemovies from './components/Moviespage/Singlemovie'
import './App.css'
import { Route, BrowserRouter, Switch, Link, withRouter } from "react-router-dom";
import Updatemovie from './components/Moviespage/Updatemovie';
import Updatedirector from './components/Directorpage/Updatedirector';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header" >
            <h1>FlixInfo</h1>
          </header>
          <Switch>
            <Route path="/movies" component={Showmovies} exact />
            <Route path='/movies/add' component={Addnewmovie} exact />
            <Route path='/home' component={Homepage} exact />
            <Route path="/directors" component={Showdirectors} exact />
            <Route path='/directors/add' component={Addnewdirector} exact />
            <Route path='/directors/:id/update' component={Updatedirector} exact />
            <Route path="/directors/:id" component={Singledirector} exact />
            <Route path='/movies/:id/update' component={Updatemovie} exact />
            <Route path="/movies/:id" component={Singlemovies} exact />

          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
            /*
/* <Route path='/movies/add' component={Addnewmovie} exact /> */