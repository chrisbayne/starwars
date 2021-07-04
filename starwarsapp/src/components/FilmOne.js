import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmOne route
export default function FilmOne({ data }) {
  return (
      <>
      <h1 style={{ display:'flex', justifyContent:'center' }}>The Phantom Menace</h1>
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with film info */}
        {data.map((filmOne, i ) => {
          return (
            <Grid.Column key={i} style={{ display:'flex', justifyContent:'center' }}>
              <Card style={{ width: '100rem' }}>
                <Card.Content>
                  <Card.Header><h2 style={{textAlign: 'center'}}>{filmOne.title}</h2></Card.Header>
                  <Card.Description>
                    <strong><u>Episode: </u></strong>
                    <p>{filmOne.episode_id}</p>
                    <strong><u>Opening Crawl</u></strong>
                    <p>{filmOne.opening_crawl}</p>
                    <strong><u>Director</u></strong>
                    <p>{filmOne.director}</p>
                    <strong><u>Release Date</u></strong>
                    <p>{filmOne.release_date}</p>
                    <strong><u>Characters</u></strong>
                    <p>{filmOne.characters}</p>
                    <strong><u>Planets</u></strong>
                    <p>{filmOne.planets}</p>
                    <strong><u>Starships</u></strong>
                    <p>{filmOne.starships}</p>
                    <strong><u>Vehicles</u></strong>
                    <p>{filmOne.vehicles}</p>
                    <strong><u>Species</u></strong>
                    <p>{filmOne.species}</p>
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