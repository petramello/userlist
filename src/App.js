import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


const UserDetail = ({ user, onBack }) => {
  return (
    <div className="Container">
      {Object.keys(user).map(attribute => (
        <div>
          {typeof user[attribute] === "string"
            ? `${attribute}: ${user[attribute]}`
            : null}
          <br/>
        </div>
      ))}
      <br/>
      <button className="BackButton" onClick={onBack}>Back</button>
    </div>
  )
}


function App() {

  const [ selectedUser, setSelectedUser ] = useState(null);
  const [users, setUsers] = useState([]);
  const [ searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const promise = axios.get('https://jsonplaceholder.typicode.com/users');
    promise.then(response => {
      // const data = response.data --- this code is the same bellow, which is destructured
      const { data } = response;
      setUsers(data);
    })
  }, []);

  const userList =  users
    .filter( ({ name }) => name.includes(searchTerm))
    .map( user => {
    return (
      <div  key={user.id}>
        <br />
        <span onClick={() => setSelectedUser(user)} style={{cursor: "pointer"}} >
          NAME: { user.name }, EMAIL:  { user.email }
        </span>
      </div>
    )
  });


  if(selectedUser) {
    return (
      <UserDetail user={selectedUser} onBack={() => setSelectedUser(null)} />
    )
  }

  return (
    <div className="Container">
      <input className="AppInput" onChange={event => setSearchTerm(event.target.value)} type="text" placeholder="Type user name to filter" />
        { userList }
    </div>
  )
}

export default App;
