import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmOne route
export default function FilmTwo({ data }) {
  return (
      <>
      <h1>Attack Of The Clones</h1>
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with film info */}
        {data.map((filmTwo, i ) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{filmTwo.title}</Card.Header>
                  <Card.Description>
                    <strong>Episode: </strong>
                    <p>{filmTwo.episode_id}</p>
                    <strong>Opening Crawl</strong>
                    <p>{filmTwo.opening_crawl}</p>
                    <strong>Director</strong>
                    <p>{filmTwo.director}</p>
                    <strong>Characters</strong>
                    <p>{filmTwo.characters}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid>
      </>
  )
}