import React from 'react';

export default function MyBucketSection(){
  return(
    <div id='mybucket-section'>
      <div className='card-list-column'>
        <button className='create-card-button'>+</button>
        <div className='card-column'>
          <div className='card-progress'/>
          <div className='card-column-info'>
          </div>
        </div>
      </div>
    </div>
  )
}