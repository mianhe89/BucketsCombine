import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

axios.defaults.withCredentials = true;

const SignUpPageWrap = styled.div`
  .body {
    height: 100%;
    overflow: hidden;
  }
  #login_cancle {
    position: fixed;
    top: 15px;
    right: 15px;
    width: 100px;
    height: 30px;
    background: #ffc700;
    border-radius: 15px;
    border: 0;
  }
  .signin_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  .login_signupbox {
    display: flex;
    flex-direction: column;
    padding: 5px 40px;
    margin: 2px 100px;
    width: 250px;
    border-radius: 5px;
  }
  .login_box {
    background-color: orange;
    border: none;
    font-size: 16;
    margin: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .login_google {
    flex: flex;
    border: none;
    font-size: 16;
    justify-content: center;
    margin: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .login_signup {
    flex: flex;
    background-color: yellow;
    border: none;
    font-size: 16;
    height: 30px;
    justify-content: center;
    margin: 4px;
    border-radius: 5px;
  }
  .email {
    width: 246px;
    height: 32px;
    padding: 2px 40px;
    margin: 10px;
    border-radius: 5px;
    border: none;
  }
  .password {
    width: 246px;
    height: 32px;
    padding: 2px 40px;
    margin: 10px;
    border-radius: 5px;
    border: none;
  }
  .signup_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }
  #repassword {
    width: 246px;
    height: 32px;
    padding: 2px 40px;
    margin: 10px;
    border-radius: 5px;
    border: none;
  }
  .username {
    width: 246px;
    height: 32px;
    padding: 2px 40px;
    margin: 10px;
    border-radius: 5px;
    border: none;
  }
  .btn_old {
    padding: 5px 40px;
    margin: 10px;
    width: 330px;
    height: 40px;
    border-radius: 5px;
  }
  .btn_gender {
    padding: 5px 40px;
    margin: 10px;
    width: 330px;
    height: 40px;
    border-radius: 5px;
  }

  .signup {
    border: none;
    font-size: 16;
    height: 40px;
    justify-content: center;
    margin: 4px;
    width: 330px;
    background: #ffc700;
    border-radius: 5px;
  }
`

export default function SignUpPage() {

  const [userinfo, setUserinfo] = useState({
    email: '',
    username: '',
    password: ''
  });
  const history = useHistory();
  const [errormessage, setErrormessage] = useState('')
  const [errormessage2, setErrormessage2] = useState('')
  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
    validate()
  }
  const validate = () => {
    if (!validateEmail(userinfo.email) || userinfo.email.length === 0) {
      setErrormessage('이메일 형식이 유효하지 않습니다')
    } else if (userinfo.username.length === 0) {
      setErrormessage('닉네임을 입력하세요')
    } else if (userinfo.password.length < 6 || userinfo.password.length > 12) {
      setErrormessage('비밀번호는 6자리 이상 12자리 이하입니다')
    } else {
      setErrormessage('')
    }
  }
  const handleSignup = () => {
    if (errormessage==="" && !(userinfo.email==="") && !(userinfo.username==="") && !(userinfo.password==="")) {
      axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
        email: userinfo.email,
        password: userinfo.password,
        username: userinfo.username
      })
      .then(res => history.push("/signin"))
      .catch(error => setErrormessage2('이미 생성된 이메일입니다'))
    }
  }
  function validateEmail(email) {
    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }



  // const [userinfo, setuserinfo] = useState({
  //   email: "",
  //   password: "",
  //   username: "",
  // });
  // const [errorMessage, setErrorMessage] = useState("");
  // const history = useHistory();
  // const handleInputValue = (key) => (e) => {
  //   setuserinfo({ ...userinfo, [key]: e.target.value });
  // };
  // const handleSignup = () => {
  //   // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
  //   //        회원가입 성공 후 로그인 페이지 이동은 다음 코드를 이용하세요.
  //   //        history.push("/");
  //   // TODO : 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
  //   if (
  //     !userinfo.email === "" ||
  //     !userinfo.password === "" ||
  //     !userinfo.username === ""
  //   ) {
  //     setErrorMessage("모든 항목은 필수입니다");
  //   } else {
  //      axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
  //       email: userinfo.email,
  //        password: userinfo.password,
  //        username: userinfo.username
  //      })
  //      .then((res) => {
  //       return history.push("/signin");
  //      });
  //   }
  //  };
  // useEffect(()=> {
  //   axios.post("http://localhost:4000/users/signup", {
  //       email: userinfo.email,
  //       password: userinfo.password,
  //       username: userinfo.username,
  //     })
  //     // .then((res) => {
  //     //   console.log(res)
  //     // });
  // }, [])
  return (
    <SignUpPageWrap>
      <div className="body">
        <div className="signin_section">
          <button id="login_cancle">취소</button>
          <div className="signin_container">
            <img
              src="images/bucketscombine_logo.png"
              alt="no"
              width="120px"
              height="120px"
            ></img>
            <div className="login_title">BucketsCombine</div>
            <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="email"
              type="email"
              placeholder="이메일"
              onChange={handleInputValue("email")}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleInputValue("password")}
            />
            <input
              className="username"
              type="username"
              placeholder="닉네임"
              onChange={handleInputValue("username")}
            />

            <button
              className="signup"
              type="submit"
              onClick={handleSignup}
            >
              가입하기
            </button>
            <div className="alert-box">{errormessage}</div>
        <div className="errormessage">{errormessage2}</div>
        <div className="singup_font_white">이미 아이디가 있으신가요? <a href="/login">login</a></div>
            </form>
          </div>
        </div>
      </div>
    </SignUpPageWrap>
  );
}
