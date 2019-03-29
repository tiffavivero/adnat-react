import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Login from './Login';
import Signup from './signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => (
  <BrowserRouter> 
    <Container>
      <Switch>
        <Route
          exact path="/"
          render={props => <Login {...props}/>}
        />
        <Route
          path="/signup"
          render={props => <Signup {...props}/>}
        />
      </Switch>
    </Container>
  </BrowserRouter>
)

export default App;
