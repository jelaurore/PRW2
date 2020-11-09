import React, {Component} from 'react';
import Nav from '../component/Nav';

class Home extends Component {
  render() {
    return (
    <div style={styles.container}>
      <Nav />
      <div style={styles.txtContainer}>
      <h1 style={styles.txth1}>Find Your Peace</h1>
      <h3 style={styles.txth3}>Sleep more. Stress less. Live better.</h3>
      <a href="#home" style={styles.btn}>Get Started</a>
      </div>
    </div>
    )
  }
  }

export default Home

const styles = {
    container: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=1951&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'cover',
      height: '100vh'
  },
  txtContainer: {
    color: 'white',
    position: 'absolute',
    width: '1140px',
    top: '50%',
    left: '50%',
    transform: 'transform: translate(-50%, -50%)',
    fontWeight: 300,
    textTransform: 'uppercase'
  },

  txth1: {
    marginTop: 0,
    marginBottom: '20px',
    color: '#fff',
    fontSize: '240%',
    wordSpacing: '4px',
    letterSpacing: '1px'
  },

  txth3: {
    fontSize: '110%',
    marginBottom: '15px'
  },
  btn: {
    display: 'inline-block',
    padding: '0.3em',
    margin: '0.3em 0',
    borderRadius: '2em',
    borderSizing: 'border-box',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.2s',
    color: '#F5939C'
  },
  btnHover: {
    backgroundColor: '#4095c6'
  }
}