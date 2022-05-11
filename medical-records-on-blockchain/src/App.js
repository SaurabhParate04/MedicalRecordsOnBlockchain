import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Records from './Pages/Records';
import Profile from './Pages/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router >
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/records">
            <Records/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/signup">
            <Login/>
          </Route>
          
          <Route exact path="/profile">
            <Profile/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App; 
