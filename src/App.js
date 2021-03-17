import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from './Components/Logo';
import Profile from './Components/Profile';

function App() {
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <Logo/>
      <Router>
        <Route exact={true} path="/prvi-task" render={() =>(
          <Card/>
        )}/>
        <Route exact={true} path="/Profile/:id" render={() => (
          <Profile/>
        )}/>
      </Router>
    </div>
  );
}

export default App;
