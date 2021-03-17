import React, {useState, useEffect} from 'react';
import logo from './logo.png';

const Logo = () => {
    
    return(
        <h1 className='navbar' style={{height: '6rem'}}>
            <img  style={{height: '6rem'}}src={logo}></img>
        </h1>
    )
}



export default Logo;