import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect, Router, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import OAuthSignUpPage from './pages/OAuthSignUpPage';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/signin'>
            <SignInPage />
          </Route>
          <Route exact path='/signupoauth'>
            <OAuthSignUpPage />
          </Route>
          <Route exact path='/signup'>
            <SignUpPage />
          </Route>
          <Route exact path='/mypage'>
            <MyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
