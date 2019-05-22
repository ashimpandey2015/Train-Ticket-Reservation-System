import React from 'react';
import './App.css';
import Payment from './components/Payment';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sampath from './components/Sampath';
import Dialog from './components/Dialog';
import bookNow from './components/bookNow';
import Index from './components/Index';
import Confirm from './components/Confirm';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/payment' exact component={Payment} />
        <Route path='/sampath' exact component={Sampath} />
        <Route path='/bookNow' exact component={bookNow} />
        <Route path='/dialog' exact component={Dialog} />
        <Route path='/confirm' exact component={Confirm} />

      </Switch>
    </Router>
    </div>
  );
}

export default App;
