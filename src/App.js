import { useContext, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter } from "react-router-dom";
import Logo from './Components/Logo';
import Profile from './Components/Profile';
import { ItemContext } from './Components/Context';

function App() {
  const [load, setLoad] = useState('false');
  const [items, setItems] = useState([]);
  const [profileId, setProfileId] = useState(0);

  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
    <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 0}}>
      <Logo />
    </div>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <ItemContext.Provider value={{items, setItems, profileId, setProfileId}}>
        <Redirect from="/prvi-task" exact to="/" />
        <Redirect from="/home" exact to="/" />
        <Redirect from="/" exact to="/" />
        <Route exact={true} path="/" render={() =>(
          <Card load={load} setLoad={setLoad}/>
        )}/>
        <Route exact={true} path="/Profile/:id" render={() => (
          <Profile/>
        )}/>
      </ItemContext.Provider>
    </div>
    </div>
    </Router>
  );
}

export default App;
