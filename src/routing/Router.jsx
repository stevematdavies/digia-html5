import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NewUserView from '../views/NewUserView';
import UsersView from '../views/UsersView';
import UserView from '../views/UserView';

const Router = () => (
  <Switch>
    <Route exact path="/users" component={UsersView} />
    <Route exact path="/users/user/:id" component={UserView} />
    <Route exact path="/users/new" component={NewUserView} />
    <Route render={() => <Redirect to="/users"/>}/>
  </Switch>
)

export default Router;