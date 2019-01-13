# Wordsoft > Deployment Branch

##  HTML5 / React Task for Digia application

[View online here](https://word-soft.herokuapp.com/#/participants)

This holds the minimal files for deploying ```word-soft``` app to the web [Heroku](https://www.heroku.com)

To see the development code and for dev-server instructions,see the __master__ branch.
If you wish to replicate this deployment code locally, please do the following: (with npm, or yarn (replace the command with what you have))

- ```git clone git@github.com:stevematdavies/digia-html5.git```
- ```cd digia-html-5```
- ```npm install ```
- ```npm start```
- navigate to [http:localhost:8080](http:localhost:8080) 

This should boot up the static app and the state of the database when you cloned it. 

## Migration to create a fresh list (table data based on raw text) ##

If you wish to migrate (refresh the database, with the base raw participant list data) do the following

- Stop the server if running with ```ctrl-c```
- ```npm run server:migrate```
- Stop the server again as above if there are no errors
- ```npm start```
- navigate to [http:localhost:8080](http:localhost:8080)

***

<span>&copy; Stephen Davies 2019</span>
<p>All work is my own and genuine, and done in accorfance with the specs as asked</p> 
<a href=mailto:stevematdavies@gmail.com>Contact me </a>
