import React from 'react';
import { Router, Route, browserHistory, DefaultRoute, IndexRoute } from 'react-router';
import { MuiThemeProvider } from "material-ui/styles";

import MainLayout from '/imports/ui/layout/mainLayout';

import Login from '/imports/ui/components/login';
import Signup from '/imports/ui/components/signup';
import CreateRoles from '/imports/ui/components/createRole';
import CreateUser from '/imports/ui/components/createUser';

export default Routes = () => (
      <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout} >
          <IndexRoute component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/createrole" component={CreateRoles} />
          <Route path="/createuser" component={CreateUser} />
        </Route>
      </Router>
      </MuiThemeProvider>
);