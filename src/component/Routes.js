import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import Meditate from '../pages/meditate/Meditate';
import Sleep from '../pages/sleep/Sleep';
import Profile from '../pages/Profile';
import Contact from '../pages/contact/Contact';
import Friends from '../pages/Friends';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/Meditate' component={Meditate}/>
      <Route exact path='/Sleep' component={Sleep}/>
      <Route exact path='/Profile' component={Profile}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/Friends' component={Friends}/>
    </Switch>
  )
}
export default Routes;