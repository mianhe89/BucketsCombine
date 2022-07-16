import React from 'react';
import styled from 'styled-components';
import StampedList from './StampedList'
import { useSelector } from 'react-redux';

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
    z-index: 3;
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
    top: 50px;
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
    width: 20px;
    height: 100%;
    background: -webkit-linear-gradient(left,white 0%,rgba(0,0,0,0) 100%);
  }

  .fog-right {
    z-index: 1;
    position: absolute;
    right: 70px;
    width: 40px;
    height: 100%;
    background: -webkit-linear-gradient(right,white 0%,rgba(0,0,0,0) 100%);
  }
`



const StampedModal = () => {
  const  amount  = useSelector((state) => state.card);
  return(
    <CardsWrap>
      <div id='card-section'>
        <div className="cards-ment">
          <div className='ment-title'>
          여러분의 성취담을 공유해보세요.
          </div>
          <div className='ment-description'>
          달성하신 카드는 도장을 찍어드려요. 여러분의 후기를 담아 공유할 수 있습니다.
          </div>
        </div>
        <div id='cards-list-row'>
        <div className='fog-left'/>
        <div className='fog-right'/>
          <StampedList/>
        </div>
        <div className='search-bar'>
          <input className='search-input' type="text" placeholder="제목 및 태그" />
          <img className='search-icon' src='/images/search-icon.png' />
        </div>
      </div>
    </CardsWrap>
  )
}
export default StampedModal;