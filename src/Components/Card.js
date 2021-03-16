import React, {useState, useEffect} from 'react';
import Component from './Component';

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
            }))
            setUsers([...users, ...tempItems])
        })
    }, [])

    const tempItems = users.map(comp => {
        return (
        <div style={{
            width: '15rem', 
            height: '15rem', 
            background: '#f0f0f5',
            alignContent: 'center', 
            textAlign: 'center', 
            marginTop: '1rem',
            marginLeft: '1rem',
            borderRadius: '20px'
            }}>
            <img style={{marginTop: '0.3rem', borderRadius: '40px'}}src={comp.picture.large}/>
            <h3 style={{height: '0.5rem', fontSize: '0.7rem'}}>{comp.title}</h3>
            <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{comp.first}</h2>
            <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{comp.last}</h2>
        </div>
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