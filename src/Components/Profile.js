import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from './Card';

const Profile = ({match}, users) => {
    console.log('profik', users);
    // const userProfile = (
        
    // )

    return (
        <div>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
             <button >This is the way</button>
        </Link>
             <h1>123</h1>
        </div>
    )
}

export default Profile;