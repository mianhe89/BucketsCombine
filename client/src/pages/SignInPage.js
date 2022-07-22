import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

const SignInPageWrap = styled.div`
  .body {
    height: 100%;
    overflow: hidden;
  }
  #login_cancle {
    position: fixed;
    top: 20px;
    right: 0;
    margin-right: 30px;
    border: none;
    box-shadow: none;
    width: 120px;
    height: 36px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #FFC700;
  }
  .signin_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(41, 41, 41);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    overflow: hidden;
  }
  .signin_section {
    background-color: rgb(41, 41, 41);
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
  }
  .login_title {
    font-weight: bold;
    color: white;
    font-size: 30px;
    margin: 20px;
    border-radius: 5px;
  }
  .login_signupbox{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 40px;
    margin: 2px 100px;
    width: 400px;
    border-radius: 5px;
    height: 200px; 
  }
  a{
    text-decoration-line : none;
  }
  #email {
    padding: 5px 40px;
    margin: 10px;
    border-radius: 5px;
    width: 246px;
    height: 40px;
    border: none;
  }
  #password {
    padding: 5px 40px;
    margin: 10px;
    border-radius: 5px;
    width: 246px;
    height: 40px;
    border: none;
  }
  #login_button {
    align-items: center;
    padding: 2px 30px;
    margin: 10px;
    width: 100px;
    height: 40px;
  }
  .login_box {
    background-color: #ff5c00;
    border: none;
    font-size: 16px;
    color: white;
    margin: 10px;
    width: 330px;
    height: 50px;
    border-radius: 5px;
  }
  .login_google {
    display: flex;
    border: none;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 330px;
    height: 50px;
    border-radius: 5px;
  }
  .login_signup {
    flex: flex;
    background-color: #ffc700;
    border: none;
    font-size: 16px;
    width: 330px;
    height: 50px;
    justify-content: center;
    margin: 10px;
    border-radius: 5px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .find {
    color: white;
    margin: 10px;
  }
  .alert{
    color: #FF5C00;
    font-size: 14px;
    margin: 10px;
  }
  .google-logo {
    width: 40px;
    height: 40px;
    position: relative;
    right: 20px;
  }

  .BC_logo {
    width: 120px;
    height: 120px;
    background-image: url("images/bucketscombine_logo.png");
    background-size: cover;
  }
`

export default function SignInPage({ handleResponseSuccess, setIsLogin }) {
  const [logininfo, setLogininfo] = useState({
    email: "",
    password: ""
  });
  const [errormessage, setErrormessage] = useState('');
  const [errormessage2, setErrormessage2] = useState('');
  const [cookies, setCookie] = useCookies(['id']); // 쿠키 훅 
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setLogininfo({ ...logininfo, [key]: e.target.value });
  };
  const handleLogin = async() => {
    // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
    // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    if (!logininfo.email || !logininfo.password) {
      setErrormessage('이메일과 비밀번호를 입력해야 합니다')
    } else if(!logininfo.password === ''){
      setErrormessage('비밀번호가 일치하지 않습니다.')
    }
    if (!errormessage) {
      await history.push("/")
      await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
        email: logininfo.email,
        password: logininfo.password
      })
      .then(res => {
        setCookie('email', res.data.token);
        setLogininfo(true)
        handleResponseSuccess()
      })
    }
  }

  const cancle = () => {
    history.goBack()
  }

  const join = () => {
    history.push("/signup")
  }
  

	return (
    <SignInPageWrap>
      <div className="body">
        <div>
          <div className="signin_section">
            <button id="login_cancle" onClick={cancle}>취소</button>
            <div className="signin_container">
              <div className="BC_logo"/>
              <div className="login_title">BucketsCombine</div>
              <div className='list' onSubmit={(e) => e.preventDefault()}>
                <input id="email"
                  type="email"
                  placeholder="이메일"
                  onChange={handleInputValue("email")}
                />
                <input id="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={handleInputValue("password")}
                />
                <div className='find'>아이디 / 비밀번호찾기</div>
                <div className='alert'>{errormessage2}</div>
                <div className="buttons">
                  <button className="login_box"
                    type="submit"
                    value="로그인"
                    onClick={handleLogin}>로그인
                  </button>
                  <button className="login_google">
                    <img className="google-logo" src="images/unnamed.webp"
                      alt="사진이 없습니다." width="20px" height="20px" />
                    구글 로그인 / 회원가입
                  </button>
                  <button className="login_signup" onClick={join}>
                    회원가입
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SignInPageWrap>
	)
}