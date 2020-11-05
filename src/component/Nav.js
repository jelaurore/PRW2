import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { Link } from 'react-router-dom';
// //Icons
// import { VscHome } from 'react-icons/vsc';
// import { BiMoon } from 'react-icons/bi';
// import { SiCircle } from 'react-icons/si';
// import { CgProfile } from 'react-icons/cg';
// import { AiOutlineContacts } from 'react-icons/ai';

function Nav() {
  const [open, setOpen] = useState(false);

  return(
    <div>
    <nav>
      <div className="logo">Peace</div>
      <ul className="nav-links"
      style={{transform: open ? "translateX(0px)" : "translateX (-500px)"}}>
        <li><a>Home</a></li>
        <li><a>Sleep</a></li>
        <li><a>Meditate</a></li>
        <li><a>Profile</a></li>
        <li><a>Contact</a></li>
      </ul>
      <i onClick={()=>setOpen(!open)} className="burger-menu"><GiHamburgerMenu/></i>
      {/* <Link to='#'><VscHome /></Link>
      <Link to='/Dashboard'><BiMoon /></Link>
      <Link to='/Dashboard'><SiCircle /></Link>
      <Link to='/Dashboard'><CgProfile /></Link>
      <Link to='/Dashboard'><AiOutlineContacts /></Link> */}
    </nav>
    </div>
  )
}
export default Nav;

//CSS Styling
// const styles = {
//   container: {

//   }
// }