import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Login from './pages/login';
import Trivia from './pages/Trivia';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/trivia" component={ Trivia } />
    </Switch>
  );
}
