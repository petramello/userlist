import React, { useEffect} from 'react';
import './App.css';
import axios from "axios";


function App() {

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
  }, [])


  return (
    <div className="App">
      <h1>Hello!</h1>
      <p>Start editing to see some magic happen! :)</p>
    </div>
  );
}

export default App;
