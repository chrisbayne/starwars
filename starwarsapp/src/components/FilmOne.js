import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmOne route
export default function FilmOne({ data }) {
  return (
      <>
      <h1>The Phantom Menace</h1>
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with film info */}
        {data.map((filmOne, i ) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{filmOne.title}</Card.Header>
                  <Card.Description>
                    <strong>Episode: </strong>
                    <p>{filmOne.episode_id}</p>
                    <strong>Opening Crawl</strong>
                    <p>{filmOne.opening_crawl}</p>
                    <strong>Director</strong>
                    <p>{filmOne.director}</p>
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