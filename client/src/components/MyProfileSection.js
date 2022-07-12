import React from 'react';

export default function MyProfileSection(){
  return(
    <div id='myprofile-section'>
      <div className="box-myprofile">
        <div>
        <div className="box-photo">사진</div>
        <div className="profile-info-section">
          <div className="profile-info-detail">
            <input className="profile-info-email" type="text" placeholder="사용자@email"></input>
            <input className="profile-info-nickname" type="text" placeholder="닉네임"></input>
          <select className="profile-info-age" required>
			      <option value="" selected>연령대</option>
			      <option value="teenages">10대</option>
			      <option value="twenty">20대</option>
			      <option value="thirty">30대</option>
            <option value="forty">40대</option>
            <option value="fifty">50대</option>
            <option value="sixty">60대</option>
            <option value="seventy">70대</option>
		      </select>
          <select className="profile-info-gender" required>
			      <option value="" selected>성별</option>
			      <option value="teenages">남자</option>
			      <option value="twenty">여자</option>
			      <option value="thirty">선택안함</option>
		      </select>
          </div>
        </div>
        </div>
        <div><input className="box-profile-introducing" type="text" placeholder="기존소개글이 적혀있고 수정가능"></input></div>
        
        <div className="profile-change-button">
          <button className="change-password-button">비밀번호 변경</button>
          <button className="change-button">변경</button>
        </div>
    </div>
    <div className="profile-signout"> 회원탈퇴 </div>
    </div>
  )
}