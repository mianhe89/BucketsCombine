import React from 'react';
import styled from 'styled-components';


const SideMenuWrap = styled.div`
  
  .sidemenu {
    position: fixed;
    height: 100%;
    width: 120px;
    background-color: rgb(41, 41, 41);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
  }

  .sidemenu-button-mybucket {
    position: absolute;
    top:35vh;
    border: none;
    box-shadow: none;
    font-size: 18px;
    color: white;
    background-color: transparent;
    font-size: 20px;
    font-weight: 100;
  }

  .sidemenu-button-myprofile {
    position: absolute;
    top:66vh;
    border: none;
    box-shadow: none;
    font-size: 18px;
    color: white;
    background-color: transparent;
    font-size: 20px;
    font-weight: 100;
  }

  .sidemenu-button:active, .sidemenu-button:focus {
    border: none;
    box-shadow: none;
  }

  .logo {
    display: flex;
    height: 60px;
    margin-top: 10px;
  }

  .logo-part2 {
    display: flex;
    left: 42px;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 70px;
    transition: all 500ms;
  }
`

export default function SideMenu(){

  function changeLogoPosition (scrollPosition, vh) {
    const logo = document.querySelector('.logo-part2')
  
    if(scrollPosition === 0){
      logo.style.top = '70px'
    } else if(scrollPosition <= 0.75 * vh ){
      logo.style.top = 'calc(35vh - 35px)'
    } else {
      logo.style.top = 'calc(66vh - 35px)'
    }
  }
  
  window.addEventListener("scroll" || "resize", (event) => {
    let scrollPosition = window.scrollY
    let vh = window.innerHeight
    changeLogoPosition(scrollPosition, vh)
  });

  return(
    <SideMenuWrap>
      <div className='sidemenu'>
      <img className='logo-part2' src='images/logo-part.png' />
          <img className='logo' src='images/logo-small.png' />
          <button className='sidemenu-button-mybucket'>My Bucket</button>
          <button className='sidemenu-button-myprofile'>My Profile</button>
      </div>
    </SideMenuWrap>
  )
}