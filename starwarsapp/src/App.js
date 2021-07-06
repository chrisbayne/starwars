import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Home from './components/Home'
import FilmOne from './components/FilmOne'
import FilmTwo from './components/FilmTwo'
import FilmThree from './components/FilmThree'
import FilmFour from './components/FilmFour'
import FilmFive from './components/FilmFive'
import FilmSix from './components/FilmSix'
import axios from 'axios'

export default function App() {
  // state variables
  const [filmOne, setFilmOne] = useState([])
  const [filmTwo, setFilmTwo] = useState([])
  const [filmThree, setFilmThree] = useState([])
  const [filmFour, setFilmFour] = useState([]) 
  const [filmFive, setFilmFive] = useState([])
  const [filmSix, setFilmSix] = useState([])
  const [loading, setLoading] = useState(true)

  // const { id } = useParams()
  const url = 'https://swapi.dev/api/films/'

  //const [filmOneCharacters, setFilmOneCharacters] = useState ([])

  // Passing in six callback functions. Seventh callback function
  // is an empty dependency array since the effect is only called once
  // the component mounts to the DOM - it's only called once
  useEffect(() => {
    // THE PHANTOM MENACE
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmOne(data.results.splice(3,1))
    })()

    // async function fetchFilmOne() {
    //   // fetching data for first film
    //   const res = await fetch(url)
      
    //   // Error handling
    //   if (res.ok) {
    //     console.log('SUCCESS')
    //   } else {
    //     const message = `An error has occured: ${res.status}`;
    //     throw new Error(message);
    //   }

    //   // creating 'data' variable to receive data back in that variable
    //   // with an await promise
    //   const data = await res.json()
    //   setFilmOne(data.results)
    //   console.log(data.results)
    // }

    ///////////////////////////////////////
    // async function fetchFilmOneCharacters() {
    //   let res = await fetch('https://swapi.dev/api/people/?format=json')
    //   let data = await res.json()
    //   setFilmOneCharacters(data.results)
    // }
    //////////////////////////////////////////

    // ATTACK OF THE CLONES
    // (async () => {
    //   const response = await fetch('https://swapi.dev/api/films')
    //   const data = await response.json()
    //   setFilmTwo(data.results.splice(4,1))
    // })()

    // async function fetchFilmTwo() {
    //   // fetching data for second film
    //   const res = await fetch('https://swapi.dev/api/films/5/?format=json')
    //   // creating 'data' variable to receive data back in that variable
    //   // with an await promise
    //   const data = await res.json()
    //   setFilmTwo(data.results)
    // }

    // REVENGE OF THE SITH
    // async function fetchFilmThree() {
    //   // fetching data for third film
    //   const res = await fetch('https://swapi.dev/api/films/6/?format=json')
    //   // creating 'data' variable to receive data back in that variable
    //   // with an await promise
    //   const data = await res.json()
    //   setFilmThree(data.results)
    // }

    // A NEW HOPE
    // async function fetchFilmFour() {
    //   // fetching data for fourth film
    //   const res = await fetch('https://swapi.dev/api/films/1/?format=json')
    //   // creating 'data' variable to receive data back in that variable
    //   // with an await promise
    //   const data = await res.json()
    //   setFilmFour(data.results)
    // }

    // THE EMPIRE STRIKES BACK
    // async function fetchFilmFive() {
    //   // fetching data for fifth film
    //   const res = await fetch('https://swapi.dev/api/films/2/?format=json')
    //   // creating 'data' variable to receive data back in that variable
    //   // with an await promise
    //   const data = await res.json()
    //   setFilmFive(data.results)
    // }

    // RETURN OF THE JEDI
    // async function fetchFilmSix() {
    //   // fetching data for sixth film
    //   const res = await fetch('https://swapi.dev/api/films/3/?format=json')
    //   // creating 'data' variable to receive data back in that variable
    //   // with an await promise
    //   const data = await res.json()
    //   setFilmSix(data.results)
    // }

    // fetchFilmOne()
    // fetchFilmTwo()
    // fetchFilmThree()
    // fetchFilmFour()
    // fetchFilmFive()
    // fetchFilmSix()
    //fetchFilmOneCharacters()
    // Loader is set to false when the data needs to be loaded
    setLoading(false)
    // Dependency array listening for when to reinvoke the function
    // But passing it an empty array so that the function is only
    // invoked once
  }, [])

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmTwo(data.results.splice(4,1))
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmThree(data.results.splice(5,1))
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmFour(data.results.splice(0,1))
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmFive(data.results.splice(1,1))
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const data = await response.json()
      setFilmSix(data.results.splice(2,1))
    })()
  }, [])

  // Checking for data returned in the console
  // console.log('filmOne', filmOne)

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
                {/* Passing in the state variable for the first film (TPM) as props */}
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
  );
}