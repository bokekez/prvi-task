import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from './Components/Logo';
import Profile from './Components/Profile';

function App() {
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState('false');

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <Logo/>
      <Router>
        <Route exact={true} path="/prvi-task" render={() =>(
          <Card load={load} setLoad={setLoad} item={item} setItem={setItem}/>
        )}/>
        <Route exact={true} path="/Profile/:id" render={() => (
          <Profile/>
        )}/>
      </Router>
    </div>
  );
}

export default App;
