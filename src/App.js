import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const promise = axios.get('https://jsonplaceholder.typicode.com/users');
    promise.then(response => {
      // const data = response.data --- this code is the same bellow, which is destructured
      const { data } = response;
      setUsers(data);
    })
  }, []);

  console.log(users);

  return users.map( ({ name, email }) => {
    return (
      <div>
        NAME: { name }, EMAIL:  { email }
      </div>
    )
  })
}

export default App;
