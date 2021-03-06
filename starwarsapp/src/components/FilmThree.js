import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

// Extracting data props from filmThree route
export default function FilmThree({ data }) {
  return (
      <>
      <Grid columns={1}>
        {/* For the item/film in the data array return grid with filmThree info */}
        {data.map((filmThree, i ) => {
          return (
            <Grid.Column key={i} style={{ display:'flex', justifyContent:'center' }}>
              <Card style={{ width: '100rem', marginTop: '5vh', borderRadius: '15px' }} color='yellow'>
                <Card.Content>
                  <Card.Header><h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Episode III - {filmThree.title}</h1></Card.Header>
                  <Card.Description>
                    <strong><u>Episode: </u></strong>
                    <p>{filmThree.episode_id}</p>
                    <strong><u>Opening Crawl</u></strong>
                    <p>{filmThree.opening_crawl}</p>
                    <strong><u>Director</u></strong>
                    <p>{filmThree.director}</p>
                    <strong><u>Release Date</u></strong>
                    <p>{filmThree.release_date}</p>
                    <strong><u>Characters</u></strong>
                    <p>{filmThree.characters}</p>
                    <strong><u>Planets</u></strong>
                    <p>{filmThree.planets}</p>
                    <strong><u>Starships</u></strong>
                    <p>{filmThree.starships}</p>
                    <strong><u>Vehicles</u></strong>
                    <p>{filmThree.vehicles}</p>
                    <strong><u>Species</u></strong>
                    <p>{filmThree.species}</p>
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