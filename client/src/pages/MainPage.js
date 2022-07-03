import React from 'react';
import Topmenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import MainSection from '../components/MainSection';
import CardSection from '../components/CardSection';
import StampedSection from '../components/StampedSection';


export default function MainPage() {
  return (
    <div className='mainpage'>
      <SideMenu />
      <div className='mainpage-section'>
        <Topmenu />
        <MainSection />
        <CardSection />
        <StampedSection />
      </div>
    </div>
  )
}