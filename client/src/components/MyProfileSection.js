import React from 'react';

export default function MyProfileSection(){
  return(
    <div id='myprofile-section'>
      <div className="box-myprofile">
        <div>
        <div className="box-photo">사진</div>
        <div className="profile-info-section">
          <div className="profile-info-detail">
            <div className="profile-info-email">사용자@이메일</div>
            <div className="profile-info-nickname">닉네임</div>
            <div className="profile-info-age"></div>
          <div className="profile-info-gender"></div>
          </div>
        </div>
        </div>
        <div className="box-profile-introducing"><text>기존소개글이 적혀있고 수정가능</text></div>
        
        <div className="profile-change-button">
          <button className="change-password-button">비밀번호 변경</button>
          <button className="change-button">변경</button>
        </div>
    </div>
    <div className="profile-signout"> 회원탈퇴 </div>
    </div>
  )
}