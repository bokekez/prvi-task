import React, {useState, useEffect} from 'react';

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

    // const getUser = () => {
    //     console.log(item)
    //     const tempItems = item.map(user => ( {
    //         'picture': user.picture,
    //         'title': user.name.title,
    //         'first': user.name.first,
    //         'last': user.name.last,           
    //     }))
    //     setUsers([...users, tempItems])
    //     console.log(users)
    // }
    console.log(users)
    console.log(item)

    return (
        <div>
            {/* <button onClick={getUser}></button> */}
        </div>
    )
}


export default Card;