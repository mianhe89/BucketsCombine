import React, { useState, useEffect, useRef } from 'react';
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

  .top-button {
    align-self: center;
    margin-right: 30px;
    border: none;
    box-shadow: none;
    width: 120px;
    height: 36px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #FFC700;
    transition: all 300ms;
  }

  .top-button:hover {
    align-self: center;
    margin-right: 30px;
    border: none;
    box-shadow: none;
    width: 120px;
    height: 36px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #FFC700;
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.3) ;
    transition: all 300ms;
  }

  .username-board {
    top: 70px;
    right: 30px;
    position: fixed;
    width: 120px;
    height: 160px;
    border-radius: 12px;
    z-index: 16;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .board-button {
    border: none;
    box-shadow: none;
    width: 100px;
    height: 34px;
    border-radius: 8px;
    font-size: 15px;
    color: black;
    background-color: #D9D9D9;
    margin: 10px;
  }

  .board-button:hover {
    border: none;
    box-shadow: none;
    width: 100px;
    height: 34px;
    border-radius: 8px;
    font-size: 15px;
    color: white;
    background-color: #323232;
    margin: 10px;
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
  const [isSignIn, setIsSignIn] = useState(false)
  const [isBoardOpen, setIsBoardOpen] = useState(false)

  const signinClick = () => {
    setIsSignIn(true)
  }

  const usernamelick = () => {
    setIsBoardOpen(!isBoardOpen)
  }

  // const dd = document.querySelector(".username-board")

  // const modalEl = useRef();
  // const handleClickOutside = ({ target }) => {
    
  //   if (modalEl.current.contains(dd)){
  //     setIsBoardOpen(false);
  //     console.log('dd')
  //   } else {
  //     console.log('ee')
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("click", handleClickOutside);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return(
    <div>
    <Desktop>
    <TopMenuWrap>
    <div className='topmenu'>
      <div className='topmenu-title' >Buckets Combine</div>
      {isSignIn?  <button className='top-button' onClick={usernamelick}>유저닉네임</button> : 
      <button className='top-button'onClick={signinClick}>Sign In</button>}
    </div>
    {isBoardOpen? <div className='username-board'>
      <button className='board-button'>My Bucket</button>
      <button className='board-button'>My Profile</button>
      <button className='board-button'>Sign Out</button>
      </div> :
      <div/>}
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