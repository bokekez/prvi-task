import React, {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from './Card';
import { ItemContext } from './Context'
import Arrow from './Arrow.png';

const Profile = ({match}) => {
    const {items, setItems, profileId, setProfileId} = useContext(ItemContext);
    const userProfile = items.filter(item => (item.id === profileId))

return (
        <div style={{marginTop: '7rem'}}>
        <Link to={`/`} style={{ textDecoration: 'none', outline: '0' }}>
             <button className='grow'style={{outline: 'none', backgroundColor: 'transparent', border: 'none'}}><img src={Arrow} style={{height: '2rem', width: '2rem'}}/></button>
        </Link>
            <div>
                <img style={{marginTop: '0.4rem', borderRadius: '40px', width: '20rem', height: '20rem'}}src={userProfile[0].picture.large}/>
                <h3 style={{height: '0.5rem', fontSize: '0.7rem'}}>{userProfile[0].title}</h3>
                <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{userProfile[0].first}</h2>
                <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{userProfile[0].last}</h2>
                <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{userProfile[0].birth}</h2>
                <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{userProfile[0].city}</h2>
                <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{userProfile[0].email}</h2>
                <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{userProfile[0].number}</h2>
            </div>
        </div>
    )
}

export default Profile;