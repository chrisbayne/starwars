import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default function NavBar() {
  return (
      <Menu inverted>
        <Container>
          <Menu.Item name="Star Wars Films" />
        </Container>
      </Menu>
  )
}
