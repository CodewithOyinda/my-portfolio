import React, {useRef} from 'react';
import '../nav/Nav.css';
import { Link, NavLink } from 'react-router-dom';
import DarkMode from '../darkmode/DarkMode';
import {FaBars, FaTimes} from 'react-icons/fa';

const Nav = () => {
    const navRef = useRef();

  const showNav =() => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <div>
         <div className='link'>
            <ul>
                <li>
                    <Link to='/'>Adegoke Oyindamola</Link>
                </li>
                <div className='navs' ref={navRef}>
                <li>
                    <Link to='/about' >ABOUT</Link>
                </li>
                <li>
                    <Link to='/projects '>PROJECTS</Link>
                </li>
                <li>
                    <Link to='/resume'>RESUME</Link>
                </li>
                <li>
                    <DarkMode/>
                </li>
                <button onClick={showNav} className='fabars close-btn'>
                <FaTimes/>
               </button>
               
                </div>
                <button onClick={showNav} className='fabars'>
               <FaBars/>
              </button>
           </ul>
            
           
        </div>
    </div>
  )
}

export default Nav