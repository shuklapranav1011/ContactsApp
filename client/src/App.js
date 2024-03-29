import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/Contact/ContactState';

function App() {
  return (
    <ContactState>
      <Router>
        <Navbar></Navbar>

        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
          </Switch>
        </div>
      </Router>
    </ContactState>
  );
}

export default App;
