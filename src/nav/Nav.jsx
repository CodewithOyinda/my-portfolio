import React from 'react';
import '../nav/Nav.css';
import { Link } from 'react-router-dom';
import DarkMode from '../darkmode/DarkMode';

const Nav = () => {
  return (
    <div>
         <div className='link'>
            <ul>
                <li>
                    <Link to='/'>Adegoke Oyindamola</Link>
                </li>
                <div className='navs'>
                <li>
                    <Link to='/about' >ABOUT</Link>
                </li>
                <li>
                    <Link to='projects '>PROJECTS</Link>
                </li>
                <li>
                    <Link to='resume'>RESUME</Link>
                </li>
                <li>
                    <DarkMode/>
                </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Nav