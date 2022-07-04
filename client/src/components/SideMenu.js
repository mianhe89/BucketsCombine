import React from 'react';

export default function SideMenu(){
  return(
    <div className='sidemenu'>
      <div className='logo-title'>
        <img className='logo' src='images/logo-small.png' />
      </div>
      <div className='side-titles'>
        <ul className='list'>
          <li>
            <button className='sidemenu-button'>Main</button>
          </li>
          <li>
            <button className='sidemenu-button'>Cards</button>
          </li>
          <li>
            <button className='sidemenu-button'>Stamped</button>
          </li>
        </ul>
      </div>
    </div>
  )
}