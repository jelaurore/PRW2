import React, { useState, useEffect } from 'react';
import Nav from '../component/Nav';

function About() {
  //Define State
  const [subHead, setSubHead] = useState({subHead: 'subHead'});
  const [description, setDescription] = useState();

  //Call the use effect hook
  useEffect(() => {
    setSubHead({subHead:'Our mission is to make the world happier and healthier.'})
    setDescription("We're a small and mighty team passionate about mental fitness, relaxation and sleep.");//Set Description
  }, [])// pass in an empty array as a second argument
  
  return(
      <div style={styles.div}>
        <Nav />
        <h1 style={styles.h1}>About Us</h1>
        <img style={styles.img} src='https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt=""/>
          <h2 style={styles.h2}>{subHead.subHead}</h2>
          <p style={styles.p}>{description}</p>
      </div>
  );
};

export default About;

// Styling the about us page 
const styles = {
  app: {
    backgroundColor: '#fafafa'
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  },
  h2: {
    textAlign: 'center',
    fontSize: '20px'
  },

  p: {
    textAlign: 'center',
    fontSize: '12px'
  },
  h1: {
    margin: '50px',
    textAlign: 'center'
  }
}