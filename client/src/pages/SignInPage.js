import React from 'react';

export default function SignInPage() {
	return (
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
			)
			}