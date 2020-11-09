import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
//Icons
import { VscHome } from 'react-icons/vsc';
import { BiMoon } from 'react-icons/bi';
import { SiCircle } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineContacts } from 'react-icons/ai';

const Nav = ()  => {
  const [open, setOpen] = useState(false);

  return(
    <div>
    <nav>
      <div className="logo">Peace</div>
      <ul className="nav-links"
      style={{transform: open ? "translateX(0px)" : ""}}>
        <li><NavLink to='/Home'><VscHome /></NavLink></li>
        <li><NavLink to='/Sleep'><BiMoon /></NavLink></li>
        <li><NavLink to='/Meditate'><SiCircle /></NavLink></li>
        <li><NavLink to='/Profile'><CgProfile /></NavLink></li>
        <li><NavLink to='/Contact'><AiOutlineContacts /></NavLink></li>
      </ul>
      <i onClick={()=>setOpen(!open)} className="burger-menu"><GiHamburgerMenu/></i>
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