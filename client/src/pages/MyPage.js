import React from 'react';
import Topmenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import MyBucketSection from '../components/MyBucketSection';
import MyProfileSection from '../components/MyProfileSection';
import SideMenuMyPage from '../components/SideMenuMyPage'

export default function MyPage() {
  return (
    <div className='mainpage'>
      <SideMenuMyPage />
      <div>
        <Topmenu />
        <MyBucketSection />
        <MyProfileSection />
      </div>
    </div>
  )
}
