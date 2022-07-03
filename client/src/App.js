import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect, Router, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import GoogleSignUpPage from './pages/GoogleSignUpPage';
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
            <MyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
