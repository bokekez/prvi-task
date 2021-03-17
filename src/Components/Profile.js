import React, {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from './Card';
import { Item } from './Context'


const Profile = ({match}) => {
    console.log('profil');
    
    const {items, setItems} = useContext(Item);
    // const userProfile = (
        
    // )

    return (
        <div>
        <Link to={`/prvi-task`} style={{ textDecoration: 'none', outline: '0' }}>
             <button >This is the way</button>
        </Link>
             <h1>123{items}</h1>
        </div>
    )
}

export default Profile;