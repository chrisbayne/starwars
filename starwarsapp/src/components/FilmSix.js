import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmSix route
export default function FilmSix({ data }) {
  return (
      <>
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with filmSix info */}
        {data.map((filmSix, i ) => {
          return (
            <Grid.Column key={i} style={{ display:'flex', justifyContent:'center' }}>
              <Card style={{ width: '100rem', marginTop: '5vh', borderRadius: '15px' }} color='green'>
                <Card.Content>
                  <Card.Header><h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Episode VI - {filmSix.title}</h1></Card.Header>
                  <Card.Description>
                    <strong><u>Episode: </u></strong>
                    <p>{filmSix.episode_id}</p>
                    <strong><u>Opening Crawl</u></strong>
                    <p>{filmSix.opening_crawl}</p>
                    <strong><u>Director</u></strong>
                    <p>{filmSix.director}</p>
                    <strong><u>Release Date</u></strong>
                    <p>{filmSix.release_date}</p>
                    <strong><u>Characters</u></strong>
                    <p>{filmSix.characters}</p>
                    <strong><u>Planets</u></strong>
                    <p>{filmSix.planets}</p>
                    <strong><u>Starships</u></strong>
                    <p>{filmSix.starships}</p>
                    <strong><u>Vehicles</u></strong>
                    <p>{filmSix.vehicles}</p>
                    <strong><u>Species</u></strong>
                    <p>{filmSix.species}</p>
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