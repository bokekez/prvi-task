import React, {useState, useEffect} from 'react';
import Component from './Component';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Card = ({load, setLoad, item, setItem}) => {
    
    const [users, setUsers] = useState([]);
    
    console.log(load)

    useEffect(() => {
        if(load !== 'true'){
        fetch(`https://randomuser.me/api/?results=200`)
        .then(response => response.json())
        .then(json => {
            const tempItems = json.results.map(user => ({
                'picture': user.picture,
                'title': user.name.title,
                'first': user.name.first,
                'last': user.name.last, 
                'birtd': user.dob.date,
                'city': user.location.city,
                'timezone': user.location.timezone.offset,    
                'email': user.email,
                'number': user.cell,
                      
            }))
            tempItems.forEach((temp, i) => {
                temp.id = i + 1;
              })
            // .then(tempItems =>{
            //     const filteredItems = tempItems.filter(member => (member.timezone === '-1:00' || member.timezone === '0:00' || member.timezone === '+1:00')({
                
            // }))
            // })    
            setUsers([...users, ...tempItems]);

            //setUsers([...users, ...filteredItems])
            setLoad('true')
            console.log('1', users)
        })
        }
    }, [load])



    const componentRender = () => {
        setItem([...item, ...users]);
        console.log('item', item)
        item.map(comp => {
        return (
        <Link to={`/profile/${comp.id}`}  className='linktext-decoration: none' style={{textDecoration: 'none', outline: '0' }}>
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
    }
    const refresh = () =>{
        setLoad('false')
    }

    return (
        <div>
            { load === 'true' ?
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {componentRender}
            </div>
            :
            <h1>Loading</h1>
            }
            <button onClick={refresh}>Refresh</button>
        </div>
    )
}


export default Card;