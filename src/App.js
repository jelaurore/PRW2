import React, {Component} from 'react';
import './App.css';
// import Nav from './component/Nav'; 
// import Contact from './pages/Contact';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './component/Routes';
// import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
        {/* <div>
          <Nav />
          <Route path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
        </div> */}
      </Router>
    );
  }
}
export default App;