import React, { useState, useEffect } from 'react';

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
      <div>
        <img src='https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt=""/>
          <h2>FullName: {subHead.subHead}</h2>
          <p>Description: {description}</p>
      </div>
  );
};

export default About;