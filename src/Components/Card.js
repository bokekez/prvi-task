import React, {useState, useEffect} from 'react';

const Card = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
        .then(response => response.json())
        .then(json => setItem(json))

    }, [])

    console.log(item)

    return (
        <div></div>
    )
}


export default Card;