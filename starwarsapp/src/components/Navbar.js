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
          <Link to='/films/1'>
            <Menu.Item name="The Phantom Menace" />
          </Link>
          <Link to='/films/2'>
            <Menu.Item name="Attack of the Clones" />
          </Link>
          <Link to='/films/3'>
            <Menu.Item name="Revenge of the Sith" />
          </Link>
          <Link to='/films/4'>
            <Menu.Item name="A New Hope" />
          </Link>
          <Link to='/films/5'>
            <Menu.Item name="The Empire Strikes Back" />
          </Link>
          <Link to='/films/6'>
            <Menu.Item name="Return of the Jedi" />
          </Link>
        </Container>
      </Menu>
  )
}
