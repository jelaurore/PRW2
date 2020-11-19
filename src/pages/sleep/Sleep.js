import React, {Component} from 'react';
import Nav from '../../component/Nav';
import '../sleep/Sleep.css';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsFillPauseFill } from 'react-icons/bs';
import Card from '../../component/Card';
import img from '../../img/1.jpeg';

//Week 4 change this to hooks syntax
class Sleep extends Component {
  state = {
    sleepList: [{
      cardImg: "https://images.unsplash.com/photo-1596501047681-97668cf7da2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80",
      cardAlt: 'Diveen Henry',
      cardTitle: 'Into the library',
      subTitle: 'By Diveen Henry'
    },{
      cardImg: '',
      cardAlt: 'Scottie Pippen',
      cardTitle: 'The History of a Dream',
      subTitle: 'By Scottie Pippen'
    },{
      cardImg: '',
      cardAlt: 'Chris Henry',
      cardTitle: 'To The River',
      subTitle: 'By Chris Henry'
    }]
  }

  render() {
    let cardSleep = this.state.sleepList.map((element, i)=> {
      return <Card key={i} val={element} />
    })
    return (
      <div>
      <Nav />
    <div>
    <h1 style={styles.container}>Sleep</h1>
    </div>

    <div className="row"> 
      <div className="column"> 
      {cardSleep}
      </div>

    <div className="column"> 
      <img src='https://images.unsplash.com/photo-1596501047681-97668cf7da2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80' alt="Scottie Pippen"/>
      <header>
      <div className='left'>
        <h1>The History of a Dream</h1>
        <h2>By Scottie Pippen</h2>
        </div>
        <div className='right'>
        <button id='play'><BsFillPlayFill /></button>
        <button id='pause'><BsFillPauseFill /></button>
      </div>
      </header>
      </div>

    <div className="column"> 
      <img src='https://images.unsplash.com/photo-1596501048653-b2248b969fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt="Chris Henry"/>
      <header>
      <div className='left'>
        <h1>To The River</h1>
        <h2>By Chris Henry</h2>
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

export default Sleep;

const styles = {
  container: {
    margin: '50px',
    textAlign: 'center',
    overflow: 'scroll'
  }
}