import React from 'react';
import CardList from './CardList';

export default function CardSection(){
  return(
    <div>
      <div className='card-section'>
      <div className="cards-ment">
        <div className='ment-title'>
          카드는 여러분의 목표입니다.
        </div>
        <div className='ment-description'>
          카드를 공유하고 카드를 나의 버킷리스트에 담아 함께 달성해보세요.
        </div>
      </div>
      <div className='cards-list-row'>
        <CardList />
      </div>
      <div className='search-bar'>
        <input className='search-input' type="text" placeholder="제목 및 태그" />
        <img className='search-icon' src='/images/search-icon.png' />
      </div>
    </div>
    </div>
  )
}