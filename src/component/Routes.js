import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/Dashboard' component={Dashboard} />
    </Switch>
  )
}
export default Routes;