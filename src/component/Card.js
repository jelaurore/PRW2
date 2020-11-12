import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Card = (props) => {
  return(
    <article>
      <img src={props.img} alt="sleep"/>
      <button> <FaPlay /></button>
    </article>
  )
}
export default Card;