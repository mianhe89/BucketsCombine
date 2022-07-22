import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useOutSideClick from './hook/UseOutSideClick';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
    width: 120px;
    height: 36px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #FFC700;
  }

  .topmenu-button:hover {
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

  .topmenu-mobile {
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    right: 0px;
    width: 10vw;
    height: 80px;
    align-items: center;
    position: fixed;
    z-index: 10;
    top:0px
  }

  .topmenu-button-mobile {
    position: absolute;
    top: 45px;
    right: 20px;
    align-self: center;
    border: none;
    width: 30px;
    height: 30px;
  }

  .topmenu-button-mobile:hover {
    position: absolute;
    top: 45px;
    right: 20px;
    align-self: center;
    border: none;
    width: 30px;
    height: 30px;
  }

  .username-board-mobile {
    top: 120px;
    right: 0px;
    position: fixed;
    width: 70px;
    height: 200px;
    border-radius: 12px;
    z-index: 16;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .board-button-mobile-mb {
    border: none;
    box-shadow: none;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    font-size: 15px;
    color: black;
    background-image: url('/images/bucket-icon.png');
    background-size: cover;
    margin: 10px;

    :hover {
      background-image: url('/images/bucket-icon-hover.png');
    }
  }
  .board-button-mobile-mp {
    border: none;
    box-shadow: none;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    font-size: 15px;
    color: black;
    background-image: url('/images/profile-icon.png');
    background-size: cover;
    margin: 10px;

    :hover {
      background-image: url('/images/profile-icon-hover.png');
    }
  }
  .board-button-mobile-so {
    border: none;
    box-shadow: none;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    font-size: 15px;
    background-image: url('/images/sign-out-icon.png');
    background-size: cover;
    margin: 10px;

    :hover {
      background-image: url('/images/sign-out-icon-hover.png');
    }
  }
`
const TopMenuWrapMobile = styled.div`
  
  
  
`

export default function Topmenu(){

  const isDesktop = useMediaQuery({ minWidth: 921 })

  const [isSignIn, setIsSignIn] = useState(false)
  const [isBoardOpen, setIsBoardOpen] = useState(false)

  const signinClick = () => {
    setIsSignIn(true)
  }

  const usernameclick = () => {
    setIsBoardOpen(!isBoardOpen)
  }

  const modalRef = useRef(null);
    const handleClose = () => {
        setIsBoardOpen(false);
    };
    useOutSideClick(modalRef, handleClose);
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
  const history = useHistory()
  const signout = async () => {
    await console.log('test')
    await history.push('/')
    await axios.get(`${process.env.REACT_APP_API_URL}/users/logout`)
  }
  return(
    <TopMenuWrap>
      <div className={isDesktop ? 'topmenu' : 'topmenu-mobile'}>
        {isDesktop ?
          <div className='topmenu-title' >Buckets Combine</div>
          : <div />}
        {isSignIn ? 
          isDesktop? <button className='topmenu-button' onClick={usernameclick} >유저닉네임</button>
          : <img className='topmenu-button-mobile' src='/images/menu-icon.png' onClick={usernameclick} />
          : isDesktop? <button className='topmenu-button' onClick={signinClick}>Sign In</button>
            : <img className='topmenu-button-mobile' src='/images/sign-in-icon.png' onClick={signinClick}/>
          }
      </div>
      {isBoardOpen ? isDesktop? <div className='username-board'>
        <button className='board-button'>My Bucket</button>
        <button className='board-button'>My Profile</button>
        <button className='board-button' onClick={signout}>Sign Out</button>
      </div> 
      : <div className='username-board-mobile'>
      <div className='board-button-mobile-mb'/>
      <div className='board-button-mobile-mp'/>
      <div className='board-button-mobile-so'/>
    </div> 
      :  <div />}
    </TopMenuWrap>
  )
}