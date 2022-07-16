import React, { useState } from 'react';
import styled from 'styled-components';
import RowList from './RowList'
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 921 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 100, maxWidth: 920 })
  return isMobile ? children : null
}

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
    z-index: 2;
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

  .fog-left {
    z-index: 3;
    position: absolute;
    left: 170px;
    width: 20px;
    height: 100%;
    background: -webkit-linear-gradient(left,white 0%,rgba(0,0,0,0) 100%);
  }

  .fog-right {
    z-index: 3;
    position: absolute;
    right: 70px;
    width: 40px;
    height: 100%;
    background: -webkit-linear-gradient(right,white 0%,rgba(0,0,0,0) 100%);
  }

  .list {
    z-index: 2;
  }
`

const CardsWrapMobile = styled.div`
  #card-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: calc(100vh - 120px);
    min-height: 700px;
    margin-top: 120px;
  }

  .cards-ment {
    margin-left: 35px;
    height: 150px;
    z-index: 2;
  }

  .ment-title {
    font-size: 40px;
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

  .fog-left {
    z-index: 3;
    position: absolute;
    left: 50px;
    width: 20px;
    height: 350px;
    background: -webkit-linear-gradient(left,white 0%,rgba(0,0,0,0) 100%);
  }

  .fog-right {
    z-index: 3;
    position: absolute;
    right: 50px;
    width: 40px;
    height: 350px;
    background: -webkit-linear-gradient(right,white 0%,rgba(0,0,0,0) 100%);
  }

  .list {
    z-index: 2;
  }
`

export default function CardsSection(){
  const [search, setSearch] = useState("");
  
  return(
    <div>
      <Desktop>
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
          <div className='list'><RowList/></div>
        </div>
      </div>
    </CardsWrap>
    </Desktop>
    <Mobile>
    <CardsWrapMobile>
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
          <div className='list'><RowList/></div>
        </div>
      </div>
    </CardsWrapMobile>
    </Mobile>
    </div>
  )
}