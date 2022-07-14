import React from 'react';
import Topmenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import MyBucketSection from '../components/MyBucketSection';
import MyProfileSection from '../components/MyProfileSection';

export default function MyPage() {
  return (
    <div className='mainpage'>
      <SideMenu />
      <div>
        <Topmenu />
        <MyBucketSection />
        <MyProfileSection />
      </div>
    </div>
  )
}