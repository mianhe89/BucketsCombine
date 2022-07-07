import React from 'react';

export default function MyProfileSection(){
  return(
    <div className='main-section'>
      <div className="main-ment">
        <div className='ment-title'>
          사람들과 함께<br />버킷리스트를 이뤄보세요
        </div>
        <div className='ment-description'>
        누구나 오랫동안 이루고 싶은 일들이나<br />
        시간이 지나가기 전에 해보고 싶은 일들을<br />
        마음에 품고 있습니다.<br />
        혼자서도 해낼 수 있지만<br />
        여럿과 함께한다면 성취하기 더 쉬울 것입니다.<br />
        또한 다른 사람에게서 새로운 목표를 얻을 수도 있겠죠.<br />
        여러분의 성취 Buckets Combine이 도와드립니다.
        </div>
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