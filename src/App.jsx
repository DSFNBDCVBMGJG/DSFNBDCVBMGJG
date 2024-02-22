//import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Nav from './components/Nav'


function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/about" component={Page2} />
        
      </Switch>
    </div>
  </Router>
  );
};

export default App
