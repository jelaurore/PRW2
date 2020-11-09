import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Meditate from '../pages/Meditate';
import Sleep from '../pages/Sleep';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';

// import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/Meditate' component={Meditate}/>
      <Route exact path='/Sleep' component={Sleep}/>
      <Route exact path='/Profile' component={Profile}/>
      <Route exact path='/Contact' component={Contact}/>
    </Switch>
  )
}
export default Routes;