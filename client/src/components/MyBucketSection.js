import React from 'react';

export default function MyBucketSection(){
  return(
    <div className='main-section'>
      <div className="main-ment">
      </div>
      <div className='videos'>
        <video className="video" autoPlay muted loop>
          <source src="/videos/A.mp4" type="video/mp4"></source>
        </video>
        <video className="video" autoPlay muted loop>
          <source src="/videos/B.mp4" type="video/mp4"></source>
        </video>
        <video className="video" autoPlay muted loop>
          <source src="/videos/C.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
}