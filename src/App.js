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
  
  return (
    <div className="App">
      <h1>Hello!</h1>
      <p>Start editing to see some magic happen! :)</p>
    </div>
  );
}

export default App;
