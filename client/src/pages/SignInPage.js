import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
const signInPageWrap = styled.div`
body {
  height: 100%;
  overflow: hidden;
}
#login_cancle {
 position: fixed;
 top: 15px;
 right: 15px;
 width: 100px;
 height: 30px;
 background-color: yellow;
 border: 0;
 border-radius: 5px;
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
.login_signupbox{
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
#login_email {
  flex: flex;
  padding: 5px 40px;
  margin: 10px;
  border-radius: 5px;
}
#login_password {
  flex: flex;
  padding: 5px 40px;
  margin: 10px;
  border-radius: 5px;
}
#login_button {
  padding: 5px 40px;
  margin: 10px
}
.signup_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
}
#signup_repassword {
  flex: flex;
  padding: 5px 40px;
  margin: 10px;
  border-radius: 5px;
}
#login_nickname {
  flex: flex;
  padding: 5px 40px;
  margin: 10px;
  border-radius: 5px;
}
.btn_gender {
  display: flex;
  padding: 5px 40px;
  margin: 10px;
  width: 15.5%;
  border-radius: 5px;
}
.btn_old {
  display: flex;
  padding: 5px 40px;
  margin: 10px;
  width: 15.5%;
  border-radius: 5px;
}
.signup_signup {
  flex: flex;
  background-color: yellow;
  border: none;
  font-size: 16;
  height: 25px;
  justify-content: center;
  margin: 4px;
  width: 15.5%;
  border-radius: 5px;
}
#singup_email {
  flex: flex;
  padding: 5px 40px;
  margin: 10px;
  border-radius: 5px;
  background-color: gray;
}
  `

export default function SignInPage() {
	return (
		<signInPageWrap>
		<body link="white" vlink="white" alink="white">
		<div>
		<div className="signin_section">
			
		<button id="login_cancle">취소</button>
		<div className="signin_container">
			<img src="bucketscombine_logo.png" alt="no" width="100px" height="100px"></img>
			<p />
				<div className="login_title">BucketsCombine</div>
				<input id="login_email" type="text" placeholder="이메일" />
				<input id="login_password" type="password" placeholder="비밀번호" />
				<input id="login_button" type="submit" value="로그인" />
				<a href="www.naver.com">아이디 / 비밀번호찾기</a>
				<div class="login_signupbox">
					<button className="login_box">로그인</button>
					<button className="login_google">
						<img src="unnamed.webp"
						alt="없어요" width="20px" height="20px"></img>
						구글 로그인 / 회원가입
						</button>
					<button className="login_signup">회원가입</button>
				</div>
			</div>
		</div>
		</div>
		</body>
		</signInPageWrap>
			)
			}