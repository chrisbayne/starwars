import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmOne route
export default function FilmFive({ data }) {
  return (
      <>
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with filmOne info */}
        {data.map((filmFive, i ) => {
          return (
            <Grid.Column key={i} style={{ display:'flex', justifyContent:'center' }}>
              <Card style={{ width: '100rem' }} color='purple'>
                <Card.Content>
                  <Card.Header><h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>{filmFive.title}</h1></Card.Header>
                  <Card.Description>
                    <strong><u>Episode: </u></strong>
                    <p>{filmFive.episode_id}</p>
                    <strong><u>Opening Crawl</u></strong>
                    <p>{filmFive.opening_crawl}</p>
                    <strong><u>Director</u></strong>
                    <p>{filmFive.director}</p>
                    <strong><u>Release Date</u></strong>
                    <p>{filmFive.release_date}</p>
                    <strong><u>Characters</u></strong>
                    <p>{filmFive.characters}</p>
                    <strong><u>Planets</u></strong>
                    <p>{filmFive.planets}</p>
                    <strong><u>Starships</u></strong>
                    <p>{filmFive.starships}</p>
                    <strong><u>Vehicles</u></strong>
                    <p>{filmFive.vehicles}</p>
                    <strong><u>Species</u></strong>
                    <p>{filmFive.species}</p>
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