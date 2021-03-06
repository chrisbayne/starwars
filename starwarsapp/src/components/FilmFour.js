import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmFour route
export default function FilmFour({ data }) {
  return (
      <>
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with filmFour info */}
        {data.map((filmFour, i ) => {
          return (
            <Grid.Column key={i} style={{ display:'flex', justifyContent:'center' }}>
              <Card style={{ width: '100rem', marginTop: '5vh', borderRadius: '15px' }} color='blue'>
                <Card.Content>
                  <Card.Header><h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Episode IV - {filmFour.title}</h1></Card.Header>
                  <Card.Description>
                    <strong><u>Episode: </u></strong>
                    <p>{filmFour.episode_id}</p>
                    <strong><u>Opening Crawl</u></strong>
                    <p>{filmFour.opening_crawl}</p>
                    <strong><u>Director</u></strong>
                    <p>{filmFour.director}</p>
                    <strong><u>Release Date</u></strong>
                    <p>{filmFour.release_date}</p>
                    <strong><u>Characters</u></strong>
                    <p>{filmFour.characters}</p>
                    <strong><u>Planets</u></strong>
                    <p>{filmFour.planets}</p>
                    <strong><u>Starships</u></strong>
                    <p>{filmFour.starships}</p>
                    <strong><u>Vehicles</u></strong>
                    <p>{filmFour.vehicles}</p>
                    <strong><u>Species</u></strong>
                    <p>{filmFour.species}</p>
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