import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
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
  useEffect(() =>{
    async function fetchFilmOne() {
      // fetching data for each film
      let res = await fetch('https://swapi.dev/api/films/?format=json')
      // creating data variable to receive data back in that variable
      let data = await res.json()
      setFilmOne(data.results)
    }

    async function fetchFilmTwo() {
      // fetching data for each film
      let res = await fetch('https://swapi.dev/api/films/5/?format=json')
      // creating data variable to receive data back in that variable
      let data = await res.json()
      setFilmTwo(data.results)
    }

    async function fetchFilmThree() {
      // fetching data for each film
      let res = await fetch('https://swapi.dev/api/films/6/?format=json')
      // creating data variable to receive data back in that variable
      let data = await res.json()
      setFilmThree(data.results)
    }

    async function fetchFilmFour() {
      // fetching data for each film
      let res = await fetch('https://swapi.dev/api/films/1/?format=json')
      // creating data variable to receive data back in that variable
      let data = await res.json()
      setFilmFour(data.results)
    }

    async function fetchFilmFive() {
      // fetching data for each film
      let res = await fetch('https://swapi.dev/api/films/2/?format=json')
      // creating data variable to receive data back in that variable
      let data = await res.json()
      setFilmFive(data.results)
    }

    async function fetchFilmSix() {
      // fetching data for each film
      let res = await fetch('https://swapi.dev/api/films/3/?format=json')
      // creating data variable to receive data back in that variable
      let data = await res.json()
      setFilmSix(data.results)
    }

    fetchFilmOne()
    fetchFilmTwo()
    fetchFilmThree()
    fetchFilmFour()
    fetchFilmFive()
    fetchFilmSix()
  }, [])
  console.log('filmOne', filmOne)

  return (
      <>
      <Router>
        <Navbar />
        <Container>
         <Switch>
           <Route exact path='/'>
             <Home />
           </Route>
           <Route  exact path='/filmone'>
             <FilmOne />
           </Route>
           <Route exact path='/filmtwo'>
             <FilmTwo />
           </Route>
           <Route exact path='/filmthree'>
             <FilmThree />
           </Route>
           <Route exact path='/filmfour'>
             <FilmFour />
           </Route>
           <Route exact path='/filmfive'>
             <FilmFive />
           </Route>
           <Route exact path='/filmsix'>
             <FilmSix />
           </Route>
         </Switch>
        </Container>
      </Router>
      </>
  );
}

export default App;
