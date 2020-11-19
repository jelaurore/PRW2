import React from 'react';
// import { FaPlay } from 'react-icons/fa';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

const Card = (props) => {
  return(
    <article>
      <img src={props.cardImg} alt={props.cardAlt}/>
      <header>
        <div className='left'>
          <h1>{props.cardTitle}</h1>
          <h2>{props.subTitle}</h2>
          </div>
          <div className='right'>
            <button id='play'><BsFillPlayFill /></button>
            <button id='pause'><BsFillPauseFill /></button>
        </div>
      </header>
    </article>
  )
}
export default Card;