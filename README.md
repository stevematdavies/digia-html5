# Wordsoft Participants List / HTML5 - React 
## A Task set by [Digia](http://www.digia.fi/) in application.

### View the site [live](https://word-soft.herokuapp.com/#/participants) ###

<a name="top"></a>
## Contents

1. [Understanding of task](#und)
2. [Provided Solution Overview](#sol)
    - [Functionality](#fn)
    - [Look & Feel](#lf)
    - [Targeted devices & Browsers](#db)
    - [Documentation](#dc)
3. [Architecture](#arc)
4. [Tooling & Libraries](#tol)
5. [Data Management](#dtm)
6. [Usage](#usg)
7. [Running](#rng)
8. [Observations & General Comments](#obs)

<a name="und"></a>
### Understanding of task

* The task given was to complete a basic participant list of random people with usual CRUD  operations
* The specs outlined the design specs and basic functionality
* General specs were given on UI items, data was simple based on the a random list to be served accordingly
* The app was tp be created via scaffolding using [create-react-app](https://facebook.github.io/create-react-app/)

  - [ ] Functionality for list ( creating updating deleting participants)
  - [ ] Loo and feel of the app to closley match given spec as much as possible.
  - [ ] Targeted site at a specific browser / browsers
  - [ ] Documentation of the app

[top](#top)
<a name="sol"></a>
### Provided Solution Overview

The solution provided in this repository aims to prioritize and meet the above sections. Each approach is provided:
  <a name="fn"></a>
  - [x] __Functionality for the list

    The client side CRUD operations were linked to a small in file SQLITE3 database and proxied by a basic express.js server
  
  [top](#top)
  <a name="lf"></a>
  - [x] __Look and Feel of app__

    A simple  basic look and feel for the app was given in the provided files, the design was followed as closley as possible.
    *Please Note* The site is __NOT__ responsive. The requirements specified did not ask for such, and lower prioroty was given for such things as such the site should be viewed in a usual monitor sized screen, not via mobile or small device at present. There
    were some minor additions in an alert that displays on successfil completion of an operation or a warning on an error. 
  
  
  [top](#top)
  <a name="db"></a>
  - [x] __Targeted site at a specific browser / browsers__

    The main development was undertaken in the Google Chrome Browser, using the latest supported CSS and HTML. The site appears acceptable in Firefox and Safari. Though as noted, is not responsive. There are a few minor differences than in chrome in the way some form fields are treated (such as not providing a title to a required inut feild in Safari). However, functionally it seems fine.
  
  [top](#top)
  <a name="dc"></a>
  - [x] __Documentation of the app__

    This ``README.md``file provides the documentation for this task. How to run it in Development mode with the back end proxy, how to migrate the data (return the list to the original 20 names). There is also a ```README.md``` for the Deployment branch which deals with the app deployment to Heroku

[top](#top)
<a name="arc"></a>
### Architecture

The App uses a client / server architecture. The front end is built and developed using the **create-react-app**cli. The back end (for data and serving static files online) was built with Node ans uses an infile SQLITE3 database to manage the data.

[top](#top)
<a name="tol"></a>
### Tooling & Libraries - 

The main tools used, were __React 16__, __React Router__, __Axios__, __Node__, __ExpressJS__ and __SQLITE__. Font Icons were provicded by [ZURB Foundation](https://word-soft.herokuapp.com/#/participants) Styling was done using custom **SASS** styles with the __SCSS__ preprocessor.

[top](#top)
<a name="dtm"></a>
### Data Management

Data was managed using **SQLITE3** simple CRUD operations, proxied with expressjs router from the client. The main data, is migrated from a basic JSON file of 20 participants and can be reloaded any time if needed via the migration instructions below. All the data is managed in one table. 

[top](#top)
<a name="usg"></a>
### Usage

The app is fairly simple and intuative. Upon loading the user is provided with a basic list of participants, with name email and phone, in a table. The row can be edited via the edit pencil icon and updated, an entry can be removed. At the top of the list as per spec there is a small add participant form where a user can add a new participant. There is basic client side form validation for adding and updating, as well as basic alert and error handling for all the actions.

[top](#top)
<a name="rng"></a>
### Running ###

The App can be run in two formats. As a full react development app, using the create-react-app development server, and as a statically served app which mimics the deployed version. For instructions on the static version please see the README instructions in the **deployment branch**. Below are the instructions for running the full development app on this branch. 

---
  1. Ensure you have the latest git, node and npm or yarn installed, and a working internet connection (for font loading etc)
  2. ```git clone git@github.com:stevematdavies/digia-html5.git ```
  3. ```cd digia-html```
  4. ```npm install / yarn install ``` > this will install the dependencies
  5. ```npm run server:migrate``` > this will load the raw data list into a new table
  5. Follow the migration instructions on screen or just stop the server with ```ctrl-c```
  6. ```npm run start:e2e``` > This should start up the express server and the react dev server and open a browser
  7. You can see the dev-build at [localhost:3000](http://localhost:3000) 
---
[top](#top)
<a name="obs"></a>
### Observations & General Comments

This was an extremely enjoyable task, if a lot to do and a little tricky. It was great that a UI spec was given, it takes a lot of time to think of a UI if not! My choices were based on expediency, so with a wider remit and more specs, I would have considered a more robust database like MongoDb or similar. I took a few liberties on the design adding in the alerts. React was the perfect framework for this, though its not the best when it comes to data binding and communication. For this app I stuck to using the internal React State and avoided Redux or MobX, though for scalability these would certainly have been good choices. I also avoided any CSS framework as the App was particulary small so the styling was not too pretentious here, although it does mean it is not ar all responsive. Again with more time and remit perhaps adding responsivness would be a good addition. I did use React-router, as in the outset I was considering view changes for many participats and one, however since its essentialy a single-page app and there is really only one page, the router is reduced to one endpoint for now! However, its comforting to know that including the router certainly provides for extensibility in the future if needed. These choices were made, as I wanted to keep the task within a workable time limit for application. However, I'd be happy to discuss this further whenever needed.

[top](#top)

&copy; 2019 Stephen Davies.
<blockquote>All work is my own, and not copied, feel free to download it, scrutinize and use it. However the design and specs are all Digias so beware! </blockquote>

[Steve Davies](https://www.linkedin.com/in/stevemdavies/)
