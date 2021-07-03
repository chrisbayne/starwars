import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  // state variables
  const [films, setFilms] = useState([]) 
  const [loading, setLoading] = useState(true)

  // Passing in two callback functions. Second callback function
  // is an empty dependency array since the effect is only called once
  // the component mounts to the DOM - it's only called once
  useEffect(() =>{
    async function fetchFilms() {
      // fetching data for each film
      let res = await fetch('https://swapi.dev/api/films/?format=json')
      // creating data variable to receive data back in that variable
      let data = res.json()
      setFilms(data.results)
    }
  }, [])

  return (
    <div className="App">
      <h1>Star Wars App</h1>
    </div>
  );
}

export default App;
