import React from 'react';

export default function Topmenu(){
  return(
    <div className='topmenu'>
      <div className='topmenu-title'>Buckets Combine</div>
      <button className='topmenu-button'>로그인</button>
      <div className='topmenu-list'>
        <div className='topmenu-subbuttons'>
          <button className='subbutton'>My Buckets</button>
          <button className='subbutton'>My Profile</button>
          <button className='subbutton'>Sign Out</button>
        </div>
      </div>
    </div>
  )
}