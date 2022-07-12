import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect, Router, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import GoogleSignUpPage from './pages/GoogleSignUpPage';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal'
import axios from 'axios';
import './App.css';

const App = () => {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {isOpen && <Modal />}
            <MainPage />
          </Route>
          <Route exact path='/signInpage'>
            <SignInPage />
          </Route>
          <Route exact path='/googleSignUpPage'>
            <GoogleSignUpPage />
          </Route>
          <Route exact path='/signUppage'>
            <SignUpPage />
          </Route>
          <Route exact path='/mypage'>
            {isOpen && <Modal />}
            <MyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;