#### Star Wars App 2021 - Chris Bayne

<div align="center">

## :rocket::alien::milky_way: Star Wars API App :milky_way::alien::rocket:

</div>

## Project Description
Implement a Star Wars info application. The application can be built for any platform (web, iOS, Android, etc.) using any language and framework(s) other than Ruby on Rails; whatever you are most comfortable with. The application should display a list of films and upon selecting a film display details for the film: metadata, characters, vehicles, planets, etc.



Below you will find instructions on how to run the application from the command line.

## Learning objectives
- To design a Single page application using useState functionality to display specific information per movie title from an API

## Milestones
### Milestone 1
- :white_check_mark:Have fun
- :white_check_mark:Build out initial state variables
    - filmOne/setFilmOne, filmTwo, setFilmTwo etc...
- :white_check_mark:Create useEffect functions with async await
- :white_check_mark:Use fetch function to receive data from api with url
- :white_check_mark:Build out FilmOne component to display the first film info
- :white_check_mark:Add Navbar to App.js with routes
- :white_check_mark:Build out nav bar/menu for film list
- :white_check_mark:Render navbar/menu and test film page with text

### Milestone 2
- :white_check_mark:Pass state variables for individual films to display their information on film pages
- :white_check_mark:Create card for film information to be displayed calling api film info
- :white_check_mark:Render each film's information on each film page
- :white_check_mark:Include error handling for bad network requests in each function
- :white_check_mark:Test each film page for good/bad network requests


# Installation and Run Instructions

To begin running this application, first clone it by copying this url into your command line

<i>git clone https://github.com/chrisbayne/starwars.git</i>

Once the project has been cloned to your machine, open terminal from the root folder and cd into the folder titled <i>'starwarsapp'</i> and <b>npm install</b> the necessary node modules to run the application.

Next, copy paste <b>npm i react-router react-router-dom semantic-ui-react semantic-ui-css</b> into the command line within that folder and press enter.

Next run <b>code .</b> to open up Visual Studio Code to view the code (if you use VSC).

Once the dependencies been installed successfully and the code is shown in your code editor, run <b>npm start</b> to view the application in your browser.
