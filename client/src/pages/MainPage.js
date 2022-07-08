import React from 'react';
import Topmenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import MainSection from '../components/MainSection';
import CardsSection from '../components/CardsSection';
import StampedSection from '../components/StampedSection';


export default function MainPage() {
  return (
    <div className='mainpage'>
      <SideMenu />
      <div className='mainpage-section'>
        <Topmenu />
        <MainSection />
        <CardsSection />
        <StampedSection />
      </div>
    </div>
  )
}