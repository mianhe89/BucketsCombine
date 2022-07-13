import React from 'react';
import Topmenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import MainSection from '../components/MainSection';
import CardsSection from '../components/CardsSection';
import StampedSection from '../components/StampedSection';
import styled from 'styled-components';

const MainPageWrap = styled.div`
  .mainpage {
    display: flex;
    flex-direction: row;
    background-color: rgb(145, 58, 116);
  }
  .mainpage-section {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100vw;
  }
`

export default function MainPage() {
  return (
    <MainPageWrap>
      <div className='mainpage'>
        <SideMenu />
        <div className='mainpage-section'>
          <Topmenu />
          <MainSection />
          <CardsSection />
          <StampedSection />
        </div>
      </div>
    </MainPageWrap>
  )
}