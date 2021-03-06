import React, {useState, useEffect, useContext} from 'react';
import Component from './Component';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import refreshArrow from './refresh-arrow.png';

const Card = ({load, setLoad}) => {
    
    const [users, setUsers] = useState([]);
    const {items, setItems, profileId, setProfileId} = useContext(ItemContext);

    useEffect(() => {
        if(load === 'false'){
        fetch(`https://randomuser.me/api/?results=1000`)
        .then(response => response.json())
        .then(json => {
            const tempItems = json.results.map(user => ({
                'picture': user.picture,
                'title': user.name.title,
                'first': user.name.first,
                'last': user.name.last, 
                'age': user.dob.age,
                'birthday': user.dob.date,
                'city': user.location.city,
                'timezone': user.location.timezone.offset,    
                'email': user.email,
                'number': user.cell,
                      
            }))
            tempItems.forEach((temp, i) => {
                temp.id = i + 1;
                temp.date = (new Date(temp.birthday).toLocaleDateString())
              })

            const filteredItems = tempItems.filter((member) => 
                    (member.timezone == '-1:00' || member.timezone == '0:00' || member.timezone == '+1:00' && member.age >= '18') 
                                
                )

            filteredItems.length = 15;

            setItems([...items,...filteredItems]);
            setLoad('true')
            
        })
        }
    }, [load])

    const componentRender = items.map(comp => {
        return (
        <Link to={`/profile/${comp.id}`} className='linktext-decoration: none' style={{color:'black' ,textDecoration: 'none', outline: '0' }}>
        <div className='grow dib shadow-5'
            onClick={() => idPass(comp.id)}
            style={{
            textDecoration: 'none',
            width: '22.7rem', 
            maxWidth: '90vw',
            height: '16rem', 
            background: '#d9d9d9',
            alignContent: 'center', 
            textAlign: 'center', 
            marginTop: '1rem',
            marginLeft: '0.5rem',
            marginRight: '0.5rem',
            borderRadius: '20px',
            transition: '0.5s'
            }}>
            <img style={{marginTop: '0.4rem', borderRadius: '40px', height: '10rem'}}src={comp.picture.large}/>
            <h3 style={{height: '0.5rem', fontSize: '0.7rem'}}>{comp.title}</h3>
            <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{comp.first}</h2>
            <h2 style={{height: '0.5rem', fontSize: '1.2rem'}}>{comp.last}</h2>
        </div>
        </Link>
        )
    })

    const idPass = (id) =>{
        setProfileId(id);
    }    
  
    const refresh = () =>{
        setItems([]);
        setLoad('false');
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '6rem'}}>
            { load === 'true' ?
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {componentRender}
            </div>
            :
            <h1>Loading</h1>
            }
            <button onClick={refresh} className='grow' 
            style={{ marginTop: '1rem', outline: 'none', backgroundColor: 'transparent', border: 'none', }}>
                <img src={refreshArrow} style={{height: '2rem', width: '2rem'}}/>
            </button>
        </div>
    )
}


export default Card;