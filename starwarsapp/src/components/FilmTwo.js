import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmOne route
export default function FilmTwo({ data }) {
  return (
      <>
      {/* <h1 style={{ display:'flex', justifyContent:'center' }}>The Phantom Menace</h1> */}
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with filmOne info */}
        {data.map((filmTwo, i ) => {
          return (
            <Grid.Column key={i} style={{ display:'flex', justifyContent:'center' }}>
              <Card style={{ width: '100rem' }} color='orange'>
                <Card.Content>
                  <Card.Header><h2 style={{textAlign: 'center'}}>{filmTwo.title}</h2></Card.Header>
                  <Card.Description>
                    <strong><u>Episode: </u></strong>
                    <p>{filmTwo.episode_id}</p>
                    <strong><u>Opening Crawl</u></strong>
                    <p>{filmTwo.opening_crawl}</p>
                    <strong><u>Director</u></strong>
                    <p>{filmTwo.director}</p>
                    <strong><u>Release Date</u></strong>
                    <p>{filmTwo.release_date}</p>
                    <strong><u>Characters</u></strong>
                    <p>{filmTwo.characters}</p>
                    <strong><u>Planets</u></strong>
                    <p>{filmTwo.planets}</p>
                    <strong><u>Starships</u></strong>
                    <p>{filmTwo.starships}</p>
                    <strong><u>Vehicles</u></strong>
                    <p>{filmTwo.vehicles}</p>
                    <strong><u>Species</u></strong>
                    <p>{filmTwo.species}</p>
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