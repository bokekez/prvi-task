import React, {useState, useEffect} from 'react';
import Component from './Component';

const Card = () => {
    const [item, setItem] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?offset=-1:00,0:00,+1:00&results=15&age>18`)
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

    // const tempItems = users.map((comp, i) => {
    //     return <div key={i} picture={comp[i].picture} title={comp[i].title} first={comp[i].first} last={comp[i].last}></div>
    // })

    const tempItems = users.map((comp) => {
           return (
           <div style={{width: '10rem', height: '10rem', borderStyle: 'solid', justifyContent: 'center'}}>
               <p>{comp.title}</p>
               <h2>{comp.first}</h2>
               <h2>{comp.last}</h2>
           </div>
           )
    })
    
    console.log('1', tempItems);

    console.log(users)
    console.log(item)

    return (
        <div>
            {tempItems}
        </div>
    )
}


export default Card;