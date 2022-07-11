import React from 'react';
import StampedList from './StampedList';
import styled from 'styled-components';

const StampedWrap = styled.div`
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

  .cards-list-row {
    display: flex;
    height: 40%;
    margin: 20px;
  }

  .search-bar {
    align-self: center;
    margin-top: 70px;
    margin-left: 120px;
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
`

export default function StampedSection(){
  return(
    <StampedWrap>
    <div id='stamped-section'>
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
        <StampedList />
      </div>
      <div className='search-bar'>
        <input className='search-input' type="text" placeholder="제목 및 태그" />
        <img className='search-icon' src='/images/search-icon.png' />
      </div>
    </div>
    </StampedWrap>
  )
}