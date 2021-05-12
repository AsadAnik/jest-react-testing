import React, { useEffect, useState } from "react";

// User Component..
const User = (props) => {
    const [user, setUser] = useState(null);

    // fetching function..
    async function fetchUserData(id){
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
            setUser({...data});
        })
        .catch(error => console.log(error));
    }

    // useEffect Hook..
    useEffect(() => {
        fetchUserData(props.id);
    }, [props.id]);

    if (!user){
        return <h1>Loading...</h1>;
    }

    // returning statement..
    return (
      <details>
          <summary>{user.name}</summary>
          <strong className={'username'}>{user.username}</strong> username.
          <br/>
          Email is <strong className={'email'}>{user.email}</strong>
          <br/>
          Phone is <strong id={'phone'}>{user.phone}</strong>
          <br/>
          <small>{user.website}</small>
      </details>
    );
};

export default User;