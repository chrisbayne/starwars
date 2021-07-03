import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Home from './components/Home'
import FilmOne from './components/FilmOne'
import FilmTwo from './components/FilmTwo'
import FilmThree from './components/FilmThree'
import FilmFour from './components/FilmFour'
import FilmFive from './components/FilmFive'
import FilmSix from './components/FilmSix'

function App() {
  // state variables
  const [filmOne, setFilmOne] = useState([])
  const [filmTwo, setFilmTwo] = useState([])
  const [filmThree, setFilmThree] = useState([])
  const [filmFour, setFilmFour] = useState([]) 
  const [filmFive, setFilmFive] = useState([])
  const [filmSix, setFilmSix] = useState([])
  const [loading, setLoading] = useState(true)

  // Passing in two callback functions. Second callback function
  // is an empty dependency array since the effect is only called once
  // the component mounts to the DOM - it's only called once
  useEffect(() => {
    // THE PHANTOM MENACE
    async function fetchFilmOne() {
      // fetching data for first film
      let res = await fetch('https://swapi.dev/api/films/?format=json')
      // creating 'data' variable to receive data back in that variable
      // with an await promise
      let data = await res.json()
      setFilmOne(data.results)
    }

    // ATTACK OF THE CLONES
    async function fetchFilmTwo() {
      // fetching data for second film
      let res = await fetch('https://swapi.dev/api/films/5/?format=json')
      // creating 'data' variable to receive data back in that variable
      // with an await promise
      let data = await res.json()
      setFilmTwo(data.results)
    }

    // REVENGE OF THE SITH
    async function fetchFilmThree() {
      // fetching data for third film
      let res = await fetch('https://swapi.dev/api/films/6/?format=json')
      // creating 'data' variable to receive data back in that variable
      // with an await promise
      let data = await res.json()
      setFilmThree(data.results)
    }

    // A NEW HOPE
    async function fetchFilmFour() {
      // fetching data for fourth film
      let res = await fetch('https://swapi.dev/api/films/1/?format=json')
      // creating 'data' variable to receive data back in that variable
      // with an await promise
      let data = await res.json()
      setFilmFour(data.results)
    }

    // THE EMPIRE STRIKES BACK
    async function fetchFilmFive() {
      // fetching data for fifth film
      let res = await fetch('https://swapi.dev/api/films/2/?format=json')
      // creating 'data' variable to receive data back in that variable
      // with an await promise
      let data = await res.json()
      setFilmFive(data.results)
    }

    // RETURN OF THE JEDI
    async function fetchFilmSix() {
      // fetching data for sixth film
      let res = await fetch('https://swapi.dev/api/films/3/?format=json')
      // creating 'data' variable to receive data back in that variable
      // with an await promise
      let data = await res.json()
      setFilmSix(data.results)
    }

    fetchFilmOne()
    fetchFilmTwo()
    fetchFilmThree()
    fetchFilmFour()
    fetchFilmFive()
    fetchFilmSix()
    // Loader is set to false
    setLoading(false)
  }, [])
  // Checking for data returned in the console
  console.log('filmOne', filmOne)

  return (
      <>
      <Router>
        <Navbar />
        <Container>
          {/* If Loading is true, ie the data hasn't been fetched, show loader */}
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route  exact path='/films'>
                {/* Passing in the state variable for the first film (TPM) as props */}
                <FilmOne data={filmOne} />
              </Route>
              <Route exact path='/films/5'>
                <FilmTwo />
              </Route>
              <Route exact path='/films/6'>
                <FilmThree />
              </Route>
              <Route exact path='/films/1'>
                <FilmFour />
              </Route>
              <Route exact path='/films/2'>
                <FilmFive />
              </Route>
              <Route exact path='/films/3'>
                <FilmSix />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
      </>
  );
}

export default App;
