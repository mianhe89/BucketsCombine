import React from 'react';
import ScrollHorizontal from 'react-scroll-horizontal';

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
        <div id='scroll-horizontal' style={{ height: `45em` }}>
        <ScrollHorizontal>
        <img src='/images/card-01.jpg' />
        <img src='/images/card-02.jpg' />
        <img src='/images/card-03.jpg' />
        <img src='/images/card-04.jpg' />
        <img src='/images/card-05.jpg' />
        </ScrollHorizontal>
        </div>
      </div>
      <div className='search-bar'>
        <input className='search-input' type="text" placeholder="제목 및 태그" />
        <img className='search-icon' src='/images/search-icon.png' />
      </div>
    </div>
    </div>
  )
}