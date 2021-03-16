import React, {useState, useEffect} from 'react';
import Component from './Component';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Card = () => {
    const [item, setItem] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=15`)
        .then(response => response.json())
        .then(json => {
            const tempItems = json.results.map(user => ({
                'picture': user.picture,
                'title': user.name.title,
                'first': user.name.first,
                'last': user.name.last, 
                'birtd': user.dob.date,
                'city': user.location.city,
                'email': user.email,
                'number': user.cell          
            }))
            tempItems.forEach((temp, i) => {
                temp.id = i + 1;
              })
            setUsers([...users, ...tempItems])
            console.log('1', users)
        })
    }, [])

    const tempItems = users.map(comp => {
        return (
        <Link to={`/profile/${comp.id}`} style={{ textDecoration: 'none' }}>
        <div className='grow dib'
            style={{
            textDecoration: 'none',
            width: '14rem', 
            height: '15rem', 
            background: '#E0E0E0',
            alignContent: 'center', 
            textAlign: 'center', 
            marginTop: '0.7rem',
            marginLeft: '0.5rem',
            marginRight: '0.5rem',
            borderRadius: '20px',
            transition: '0.5s'
            }}>
            <img style={{marginTop: '0.4rem', borderRadius: '40px'}}src={comp.picture.large}/>
            <h3 style={{height: '0.5rem', fontSize: '0.7rem'}}>{comp.title}</h3>
            <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{comp.first}</h2>
            <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{comp.last}</h2>
        </div>
        </Link>
        )
    })

    console.log(users)
    console.log(item)

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {tempItems}
        </div>
    )
}


export default Card;