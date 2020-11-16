import React, {Component} from 'react';
import '../meditate/Meditate.css';
import Nav from '../../component/Nav';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsFillPauseFill } from 'react-icons/bs';

//Week 4 change this to hooks syntax
class Meditate extends Component {
  render() {
    return (
      <div>
      <Nav />
    <div>
    <h1 style={styles.container}>Meditate</h1>
    </div>

    <div className="row"> 
    <div className="column"> 
      <img src='https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80' alt="Lebron James"/>
      <header>
      <div className='left'>
        <h1>Train Your Mind</h1>
        <h2>By Lebron James</h2>
        </div>
        <div className='right'>
        <button id='play'><BsFillPlayFill /></button>
        <button id='pause'><BsFillPauseFill /></button>
      </div>
      </header>
      </div>

    <div className="column"> 
      <img src='https://images.unsplash.com/photo-1572879023364-ab4f53e9d5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt="Nikolay Dimitri"/>
      <header>
      <div className='left'>
        <h1>Anxiety Release</h1>
        <h2>By Nikolay Dimitri</h2>
        </div>
        <div className='right'>
        <button id='play'><BsFillPlayFill /></button>
        <button id='pause'><BsFillPauseFill /></button>
      </div>
      </header>
      </div>

    <div className="column"> 
      <img src='https://images.unsplash.com/photo-1554067559-269708c83fb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=3252&q=80' alt="Jon Flobrant"/>
      <header>
      <div className='left'>
        <h1>Easing Depression</h1>
        <h2>By Jon Flobrant</h2>
        </div>
        <div className='right'>
        <button id='play'><BsFillPlayFill /></button>
        <button id='pause'><BsFillPauseFill /></button>
      </div>
      </header>
      </div>

    </div>



    </div>
    )
  }
}

export default Meditate;

const styles = {
  container: {
    margin: '50px',
    textAlign: 'center'
}
}