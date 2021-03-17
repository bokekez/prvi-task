import { useContext, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from './Components/Logo';
import Profile from './Components/Profile';
import { ItemContext } from './Components/Context';

function App() {
  const [load, setLoad] = useState('false');
  const [items, setItems] = useState([]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <Logo/>
      <ItemContext.Provider value={{items, setItems}}>
      <Router>
        <Route exact={true} path="/prvi-task" render={() =>(
          <Card load={load} setLoad={setLoad}/>
        )}/>
        <Route exact={true} path="/Profile/:id" render={() => (
          <Profile/>
        )}/>
      </Router> 
      </ItemContext.Provider>
    </div>
  );
}

export default App;
