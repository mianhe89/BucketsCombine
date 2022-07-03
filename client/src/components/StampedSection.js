import React from 'react';

export default function StampedSection(){
  return(
    <div>
      <div className='stamped-section'>
      <div className="cards-ment">
        <div className='ment-title'>
          여러분의 성취담을 공유해보세요.
        </div>
        <div className='ment-description'>
          달성하신 카드는 도장을 찍어드려요.<br />
          여러분의 후기를 담아 공유할 수 있습니다.
        </div>
      </div>
      <div className='cards-list-row'>
        cards
      </div>
      <div className='search-bar'>
        검색
      </div>
    </div>
    </div>
  )
}