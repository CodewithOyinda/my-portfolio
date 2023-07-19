import React from 'react';
import '../darkmode/DarkMode.css';
import sun from './img/Sun.svg';
import moon from './img/Moon.svg';

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light')
    }
    const selectedTheme = localStorage.getItem('selectedTheme');
    
    if (selectedTheme === 'light') {
        setDarkMode();
    }

    const toggleTheme = e => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }
  return (
    <div className='dark_mode'>
    <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        defaultChecked = {selectedTheme === 'light'}
    />
    <label className='dark_mode_label' for='darkmode-toggle'>
        <img src={sun} alt='sun' style={{width:'15px', height:'15px'}} className='sun'/>
        <img src={moon} alt='moon' style={{width:'15px', height:'15px', marginRight:'20px'}} className='moon'/>
    </label>
</div>
  )
}

export default DarkMode