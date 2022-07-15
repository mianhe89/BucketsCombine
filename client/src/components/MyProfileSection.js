import React from 'react';
import styled from 'styled-components'

const MyProfileWrap = styled.div`
  #myprofile-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: calc(100vw - 120px);
    height: 100vh;
    margin-left: 120px;
  }
  .box-myprofile {
    display: flex;
    margin: 0 auto;
    background-color: lightgray;
    width: 85vh;
    height: 70vh;
    border-radius: 15px;
    flex-direction: column;
    
  }
  .box-photo {
    margin-top: 30px;
    margin-left: 30px;
    background-color: white;
    border-radius: 10px;
    width: 25vh;
    height: 25vh;
    float: left;
    box-shadow: gray 1px 5px 5px;
  }
  .profile-info-section {
    display: flex;
    width: 40vh;
    height: 30vh;
    float: right;
    margin-right: 30px;
    
  }
  .profile-info-detail {
    margin-top: 20px;
    margin-left: 30px
  }
  .profile-info-email{
    width: 285px;
    height: 40px;
    background-color: gray;
    border-radius: 10px;
    border: none;
    color:white;
  }
  .profile-info-nickname {
    width: 285px;
    height: 40px;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    border: none;
  }
  .profile-info-age {
    width: 20vw;
    height: 40px;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    border: none;
  }
  .profile-info-gender {
    width: 20vw;
    height: 40px;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    border: none;
  }
  .box-profile-introducing 
  {
    display: flex;
    border-radius: 10px;
    width: 92%;
    height: 30vh;
    margin-left: 26px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    border: none;
    box-shadow: gray 5px 5px 5px;

  }
  .profile-change-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 10px;
  }
  .change-password-button {
    display: flex;
    margin-right: 30px;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
  }
  .change-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    border-radius: 10px;
    border:none;
    background-color: black;
    color: white;

  }
  .profile-signout {
    margin-top: 5px;
    margin-left: 24vw;
  }
`

export default function MyProfileSection(){
  return(
    <MyProfileWrap>
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
    </MyProfileWrap>
  )
}