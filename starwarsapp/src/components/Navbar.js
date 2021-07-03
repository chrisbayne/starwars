import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
      <Menu inverted>
        <Container>
          <Link to='/'>
            <Menu.Item name='Home' />
          </Link>
          <Link to='/filmone'>
            <Menu.Item name="The Phantom Menace" />
          </Link>
          <Link to='/filmtwo'>
            <Menu.Item name="Attack of the Clones" />
          </Link>
          <Link to='/filmthree'>
            <Menu.Item name="Revenge of the Sith" />
          </Link>
          <Link to='/filmfour'>
            <Menu.Item name="A New Hope" />
          </Link>
          <Link to='/filmfive'>
            <Menu.Item name="The Empire Strikes Back" />
          </Link>
          <Link to='/filmsix'>
            <Menu.Item name="Return of the Jedi" />
          </Link>
        </Container>
      </Menu>
  )
}
