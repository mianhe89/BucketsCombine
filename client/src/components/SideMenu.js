import React from 'react';
import styled from 'styled-components';

const SideMenuWrap = styled.div`
  .sidemenu {
    position: fixed;
    height: 100%;
    width: 120px;
    background-color: rgb(41, 41, 41);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  }

  .sidemenu-button {
    border: none;
    box-shadow: none;
    font-size: 18px;
    width: 100px;
    height: 50px;
    color: white;
    background-color: transparent;
  }

  .sidemenu-button:active, .sidemenu-button:focus {
    border: none;
    box-shadow: none;
  }

  .logo-title {
    display: flex;
    align-self: flex-start;
    margin-top: 15px;
  }

  .logo {
    display: flex;
    align-self: flex-start;
    height: 60px;
  }

  .side-titles {
    height: 50vh;
    position: fixed;
    display: flex;
    color: white;
    font-size: 20px;
    font-weight: 100;
    text-align: center;
  }

  .list {
    list-style: none;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }
`

export default function SideMenu(){
  return(
    <SideMenuWrap>
      <div className='sidemenu'>
        <div className='logo-title'>
          <img className='logo' src='images/logo-small.png' />
        </div>
        <div className='side-titles'>
          <ul className='list'>
            <li>
              <button className='sidemenu-button'>Main</button>
            </li>
            <li>
              <button className='sidemenu-button'>Cards</button>
            </li>
            <li>
              <button className='sidemenu-button'>Stamped</button>
            </li>
          </ul>
        </div>
      </div>
    </SideMenuWrap>
  )
}