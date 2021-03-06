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

  // Passing in six callback functions. Each callback function has 
  // an empty dependency array since the effect is only called once
  // the component mounts to the DOM - it's only called once

  /// THE PHANTOM MENACE 3,1
  useEffect(() => {
    // wrapping the async function so that it is invoked immediately
    (async () => {
      try {
      // fetching all film data
      const response = await fetch(url)
      // check to see if the console is receiving the data from the url
      console.log(response)

      // if the response is *not* okay, fire a network failure message and status  
      if(!response.ok) {
        throw Error(`Attention! Galactic Http Error. Could not fetch the trade federation's data. Status: ${response.status} Check the url.`)
      }

      // creating 'data' variable to reveive data back in that variable
      const data = await response.json()

      // store and splice the specific data for the first film
      setFilmOne(data.results.splice(3,1))

      // setting the error to null if the network request is good
      setError(null)
      
      // catch the error if it exists and display on the page and in the console
      } catch(err) {
        setError(err.message)
        console.log(err.message)
        // alert(err)
      }
    })()

    // Loader is set to false when the data needs to be loaded / is loading
    setLoading(false)
    
    // Dependency array listening for when to reinvoke the function
    // But passing it an empty array so that the function is only
    // invoked once, otherwise infinite loop of calls occurs
  }, [])

  /// ATTACK OF THE CLONES 4,1
  useEffect(() => {
    (async () => {
      try {
      const response = await fetch(url)
      console.log(response)
      
      if(!response.ok) {
        throw Error(`Attention! Galactic Http Error. Could not fetch the trade federation's data. Status: ${response.status} Check the url.`)
      }

      const data = await response.json()

      setFilmTwo(data.results.splice(4,1))
      setError(null)
      
      } catch(err) {
        setError(err.message)
        console.log(err.message)
        // alert(err)
      }
    })()

    setLoading(false)
  }, [])

  /// REVENGE OF THE SITH 5,1
  useEffect(() => {
    (async () => {
      try {
      const response = await fetch(url)
      console.log(response)

      if(!response.ok) {
        throw Error(`Attention! Galactic Http Error. Could not fetch the trade federation's data. Status: ${response.status} Check the url.`)
      }

      const data = await response.json()

      setFilmThree(data.results.splice(5,1))
      setError(null)
      
      } catch(err) {
        setError(err.message)
        console.log(err.message)
        // alert(err)
      }
    })()

    setLoading(false)
  }, [])

  /// A NEW HOPE 0,1
  useEffect(() => {
    (async () => {
      try {
      const response = await fetch(url)
      console.log(response)
 
      if(!response.ok) {
        throw Error(`Attention! Galactic Http Error. Could not fetch the trade federation's data. Status: ${response.status} Check the url.`)
      }

      const data = await response.json()

      setFilmFour(data.results.splice(0,1))
      setError(null)
      
      } catch(err) {
        setError(err.message)
        console.log(err.message)
        // alert(err)
      }
    })()

    setLoading(false)
  }, [])

  /// THE EMPIRE STRIKES BACK 1,1
  useEffect(() => {
    (async () => {
      try {
      const response = await fetch(url)
      console.log(response)

      if(!response.ok) {
        throw Error(`Attention! Galactic Http Error. Could not fetch the trade federation's data. Status: ${response.status} Check the url.`)
      }

      const data = await response.json()

      setFilmFive(data.results.splice(1,1))
      setError(null)
      
      } catch(err) {
        setError(err.message)
        console.log(err.message)
        // alert(err)
      }
    })()

    setLoading(false)
  }, [])

  /// RETURN OF THE JEDI 2,1
  useEffect(() => {
    (async () => {
      try {
      const response = await fetch(url)
      console.log(response)

      if(!response.ok) {
        throw Error(`Attention! Galactic Http Error. Could not fetch the trade federation's data. Status: ${response.status} Check the url.`)
      }

      const data = await response.json()

      setFilmSix(data.results.splice(2,1))
      setError(null)
      
      } catch(err) {
        setError(err.message)
        console.log(err.message)
        // alert(err)
      }
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
                  color: '#6D6A55', 
                  textAlign: 'center', 
                  marginTop: '35vh' 
                  }}>{ error }
                </h1> }
                <FilmOne data={filmOne} />
              </Route>
              <Route exact path='/films/2'>
              { error && <h1 style={{ 
                  fontSize: '5em', 
                  backgroundColor: '#232323', 
                  color: '#89621F', 
                  textAlign: 'center', 
                  marginTop: '35vh' 
                  }}>{ error }
                </h1> }
                <FilmTwo data={filmTwo}/>
              </Route>
              <Route exact path='/films/3'>
              { error && <h1 style={{ 
                  fontSize: '5em', 
                  backgroundColor: '#232323', 
                  color: '#7C2D2D', 
                  textAlign: 'center', 
                  marginTop: '35vh' 
                  }}>{ error }
                </h1> }
                <FilmThree data={filmThree}/>
              </Route>
              <Route exact path='/films/4'>
              { error && <h1 style={{ 
                  fontSize: '5em', 
                  backgroundColor: '#232323', 
                  color: '#355F8D', 
                  textAlign: 'center', 
                  marginTop: '35vh' 
                  }}>{ error }
                </h1> }
                <FilmFour data={filmFour}/>
              </Route>
              <Route exact path='/films/5'>
              { error && <h1 style={{ 
                  fontSize: '5em', 
                  backgroundColor: '#232323', 
                  color: '#4C4B77', 
                  textAlign: 'center', 
                  marginTop: '35vh' 
                  }}>{ error }
                </h1> }
                <FilmFive data={filmFive}/>
              </Route>
              <Route exact path='/films/6'>
              { error && <h1 style={{ 
                  fontSize: '5em', 
                  backgroundColor: '#232323', 
                  color: '#355F3C', 
                  textAlign: 'center', 
                  marginTop: '35vh' 
                  }}>{ error }
                </h1> }
                <FilmSix data={filmSix}/>
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
      </>
  )
}