import React from 'react';
import styled from 'styled-components';
import RowList from './RowList'

const CardsWrap = styled.div`
  #card-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: calc(100vw - 120px);
    height: 100vh;
    min-height: 700px;
    margin-left: 120px;
  }

  .cards-ment {
    margin-left: 60px;
    height: 150px;
  }

  .ment-title {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .ment-description {
    font-size: 16px;
    line-height: 32px;
  }

  #cards-list-row {
    display: flex;
    height: 40%;
    margin: 20px;
  }

  .search-bar {
    align-self: center;
    position: relative;
    margin-left: 0px;
    width: 40vw;
  }

  .search-input {
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
  }

  .search-icon {
    position : absolute;
    width: 17px;
    top: 10px;
    right: 0px;
    margin: 0px;
  }

  .fog-left {
    z-index: 1;
    position: absolute;
    left: 170px;
    width: 30px;
    height: 35%;
    background: -webkit-linear-gradient(left,white 0%,rgba(0,0,0,0) 100%);
  }

  .fog-right {
    z-index: 1;
    position: absolute;
    right: 70px;
    width: 40px;
    height: 35%;
    background: -webkit-linear-gradient(right,white 0%,rgba(0,0,0,0) 100%);
  }
`

export default function CardsSection(){
  return(
    <CardsWrap>
      <div id='card-section'>
        <div className="cards-ment">
          <div className='ment-title'>
            카드는 여러분의 목표입니다.
          </div>
          <div className='ment-description'>
            카드를 공유하고 카드를 나의 버킷리스트에 담아 함께 달성해보세요.
          </div>
        </div>
        <div id='cards-list-row'>
        <div className='fog-left'/>
        <div className='fog-right'/>
          <RowList/>
        </div>
        <div className='search-bar'>
          <input className='search-input' type="text" placeholder="제목 및 태그" />
          <img className='search-icon' src='/images/search-icon.png' />
        </div>
      </div>
    </CardsWrap>
  )
}