import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewParticipantView from '../views/new-participant/NewParticipantView';
import ParticipantView from '../views/participant/ParticipantView';
import ParticipantsView from '../views/participants/ParticipantsView';

const Router = () => (
  <Switch>
    <Route exact path="/participants" component={ParticipantsView} />
    <Route exact path="/participants/user/:id" component={ParticipantView} />
    <Route exact path="/participants/new" component={NewParticipantView} />
    <Route render={() => <Redirect to="/participants"/>}/>
  </Switch>
)

export default Router;