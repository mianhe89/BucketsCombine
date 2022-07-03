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
            <a>Main</a>
          </li>
          <li>
            <a>Cards</a>
          </li>
          <li>
            <a>Stamped</a>
          </li>
        </ul>
      </div>
    </div>
  )
}