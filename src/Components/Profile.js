import React, {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from './Card';
import { ItemContext } from './Context'
import Arrow from './Arrow.png';

const Profile = ({match}) => {
    console.log('profil');
    
    const {items, setItems} = useContext(ItemContext);
    // const userProfile = (
        
    // )

    return (
        <div>
        <Link to={`/prvi-task`} style={{ textDecoration: 'none', outline: '0' }}>
             <button style={{color: 'transparent'}}><img src={Arrow} style={{height: '2rem', width: '2rem'}}/></button>
        </Link>
             <h1>123{items}</h1>
        </div>
    )
}

export default Profile;