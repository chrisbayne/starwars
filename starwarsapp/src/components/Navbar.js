import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default function NavBar() {
  return (
      <Menu inverted>
        <Container>
          <Menu.Item name="Star Wars Saga" />
          <Menu.Item name="The Phantom Menace" />
          <Menu.Item name="Attack of the Clones" />
          <Menu.Item name="Revenge of the Sith" />
          <Menu.Item name="A New Hope" />
          <Menu.Item name="The Empire Strikes Back" />
          <Menu.Item name="Return of the Jedi" />
        </Container>
      </Menu>
  )
}
