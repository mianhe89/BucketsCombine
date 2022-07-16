import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 921 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 100, maxWidth: 920 })
  return isMobile ? children : null
}

const TopMenuWrap = styled.div`
  .topmenu {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    width: 100vw;
    height: 80px;
    align-items: center;
    position: fixed;
    z-index: 5;
  }

  .topmenu-title {
    font-size: 28px;
    margin-left: 140px;
  }

  .topmenu-button {
    align-self: center;
    margin-right: 30px;
    border: none;
    box-shadow: none;
    width: 100px;
    height: 36px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #FFC700;
  }
`
const TopMenuWrapMobile = styled.div`
  .topmenu {
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    right: 0px;
    width: 10vw;
    height: 80px;
    align-items: center;
    position: fixed;
    z-index: 10;
  }

  .topmenu-button {
    position: absolute;
    top: 10px;
    right: 10px;
    align-self: center;
    border: none;
    box-shadow: none;
    width: 36px;
    height: 100px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #FFC700;
  }
  
`

export default function Topmenu(){
  return(
    <div>
    <Desktop>
    <TopMenuWrap>
    <div className='topmenu'>
      <div className='topmenu-title'>Buckets Combine</div>
      <button className='topmenu-button'>로그인</button>
    </div>
    </TopMenuWrap>
    </Desktop>
    <Mobile>
    <TopMenuWrapMobile>
      <div className='topmenu'>
        <button className='topmenu-button'>Log<br/> In</button>
      </div>
    </TopMenuWrapMobile>
    </Mobile>
    </div>
  )
}