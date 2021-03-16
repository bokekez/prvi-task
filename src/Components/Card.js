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
            borderStyle: 'solid', 
            borderColor: 'white', 
            alignContent: 'center', 
            textAlign: 'center', 
            marginTop: '1rem',
            marginLeft: '1rem'
            }}>
            <img style={{marginTop: '2px'}}src={comp.picture.medium}/>
            <p>{comp.title}</p>
            <h2>{comp.first}</h2>
            <h2>{comp.last}</h2>
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