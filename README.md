# Deployment Branch

This holds the minimal files for deploying ```word-soft``` app to the web [Heroku](https://www.heroku.com)

To see the development code and for instructions, you can use the __master__ branch.
If you wish to replicate this deployment code locally, please do the following: (with npm, or yarn (replace the command with what you have))

- ```git clone git@github.com:stevematdavies/digia-html5.git```
- ```cd digia-html-5```
- ```npm install ```
- ```npm start```
- navigate to [http:localhost:8080](http:localhost:8080) 

This should boot up the static app and the state of the database when you cloned it. 
If you wish to migrate (refresh the database, with the base raw participant list data) do the following

- Stop the server if running with ```ctrl-c```
- ```npm run server:migrate```
- Stop the server again as above if there are no errors
- ```npm start```
- navigate to [http:localhost:8080](http:localhost:8080)