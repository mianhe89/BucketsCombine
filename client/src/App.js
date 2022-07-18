import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect, Router, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import OAuthSignUpPage from './pages/OAuthSignUpPage';
import CardsSection from './components/CardsSection';
import StampedSection from './components/StampedSection'
import RowList from './components/RowList'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import MainPageCardModal from './components/modals/MainPageCardModal'
import axios from 'axios';
import './App.css';
import MakeCardModal from './components/modals/MakeCardModal';
import MainPageStampedCardModal from './components/modals/MainPageStampedModal';
import MyCardModal from './components/modals/MyCardModal'
import MyPageStampedCard from './components/modals/MyPageStampedCard'
import ConfirmPasswordModal from './components/modals/ConfirmPasswordModal'
import ChangePasswordCardModal from './components/modals/ChangePasswordModal';
import WithdrawalCardModal from './components/modals/WithdrawalModal';

const App = () => {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {isOpen && <MainPageCardModal />}
            <MainPage />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route exact path="/signupoauth">
            <OAuthSignUpPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path='/mypage'>
            {isOpen && <MyCardModal/>}
            <MyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
