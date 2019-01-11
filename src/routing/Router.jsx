import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ParticipantsView from '../views/participants/ParticipantsView';

const Router = () => (
  <Switch>
    <Route exact path="/participants" component={ParticipantsView} />
    <Route render={() => <Redirect to="/participants"/>}/>
  </Switch>
)

export default Router;