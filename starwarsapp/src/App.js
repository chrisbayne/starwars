import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import FilmOne from './components/FilmOne'
import FilmTwo from './components/FilmTwo'
import FilmThree from './components/FilmThree'
import FilmFour from './components/FilmFour'
import FilmFive from './components/FilmFive'
import FilmSix from './components/FilmSix'

export default function App() {
  // state variables
  const [filmOne, setFilmOne] = useState([])
  const [filmTwo, setFilmTwo] = useState([])
  const [filmThree, setFilmThree] = useState([])
  const [filmFour, setFilmFour] = useState([]) 
  const [filmFive, setFilmFive] = useState([])
  const [filmSix, setFilmSix] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const url = 'https://swapi.dev/api/films/'

  // Passing in six callback functions. Seventh callback function
  // is an empty dependency array since the effect is only called once
  // the component mounts to the DOM - it's only called once

  /// THE PHANTOM MENACE
  useEffect(() => {
    (async () => {
      try {
      // fetching data for the first film
      const response = await fetch(url)
        console.log(response)
      // if the response is not okay, fire a network failure status  
      if(!response.ok) {
        throw Error(`Attention! Galactic Http Error. Could not fetch the trade federation's data. Status: ${response.status} Check the url.`)
      }

      // creating 'data' variable to reveive data back in that variable
      const data = await response.json()

      // store the data
      setFilmOne(data.results.splice(3,1))
      setError(null)
      
      } catch(err) {
        setError(err.message)
        console.log(err.message)
        // alert(err)
      }
    })()

    // Loader is set to false when the data needs to be loaded
    setLoading(false)
    
    // Dependency array listening for when to reinvoke the function
    // But passing it an empty array so that the function is only
    // invoked once
  }, [])

  /// ATTACK OF THE CLONES
  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmTwo(data.results.splice(4,1))
    })()
    setLoading(false)
  }, [])

  /// REVENGE OF THE SITH
  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmThree(data.results.splice(5,1))
    })()
    setLoading(false)
  }, [])

  /// A NEW HOPE
  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmFour(data.results.splice(0,1))
    })()
    setLoading(false)
  }, [])

  /// THE EMPIRE STRIKES BACK
  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmFive(data.results.splice(1,1))
    })()
    setLoading(false)
  }, [])

  /// RETURN OF THE JEDI
  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmSix(data.results.splice(2,1))
    })()
    setLoading(false)
  }, [])

  return (
      <>
      <Router>
        <Navbar />
        <Container>
          {/* If Loading is true, ie the data is in the process of being fetched, show loader */}
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route  exact path='/films/1'>
                {/* Passing in the state variable for the first film (TPM) as props. If there is a network error, display the error, otherwise display the fetched data. */}
                { error && <h1 style={{ 
                  fontSize: '5em', 
                  backgroundColor: '#232323', 
                  color: '#55C2B5', 
                  textAlign: 'center', 
                  marginTop: '35vh' 
                  }}>{ error }
                </h1> }
                <FilmOne data={filmOne} />
              </Route>
              <Route exact path='/films/2'>
                <FilmTwo data={filmTwo}/>
              </Route>
              <Route exact path='/films/3'>
                <FilmThree data={filmThree}/>
              </Route>
              <Route exact path='/films/4'>
                <FilmFour data={filmFour}/>
              </Route>
              <Route exact path='/films/5'>
                <FilmFive data={filmFive}/>
              </Route>
              <Route exact path='/films/6'>
                <FilmSix data={filmSix}/>
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
      </>
  )
}