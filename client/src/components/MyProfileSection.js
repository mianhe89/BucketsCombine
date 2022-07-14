import React from 'react';
import styled from 'styled-components'

const MyProfileWrap = styled.div`
  #myprofile-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 120px);
    height: 100vh;
    margin-left: 120px;
  }
  .myprofile-container {
    display: flex;
    background-color: #ededed;
    border-radius: 20px;
    flex-direction: column;
    height: 588px;
    width: 847px;
    border-radius: 20px;
    border: 10px dotted white;
  }
  .box-photo {
    background-color: white;
    width: 148px;
    height: 148px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 15px;
    border: 1px solid #969696;
    font-family: Inter;
    font-size: 18px;
    text-align: center;
    line-height: 145px;
    color: #969696;  
  }

  .partition {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 28px;
  }
  .profile-info-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    height: 200px;
  }

  .profile-info-email {
    height: 40px;
    border-radius: 5px;
    background: #9F9F9F;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-size: 14px;
    color: white;
    line-height: 40px;
    padding: 0px 0px 0px 8px;
  }
  .profile-info-nickname {
    height: 40px;
    border-radius: 5px;
    background-color: white;
    border: none;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 1px solid #969696;
    box-sizing: border-box;
    padding: 8px;
  }
  .profile-info-age {
    height: 40px;
    border-radius: 5px;
    background-color: white;
    border: none;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 1px solid #969696;
    box-sizing: border-box;
    padding: 5px;
  }
  .profile-info-gender {
    height: 40px;
    border-radius: 5px;
    background-color: white;
    border: none;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 1px solid #969696;
    box-sizing: border-box;
    padding: 5px;
  }

  .profile-introducing {
    height: 100%;
    border-radius: 10px;
    margin: 28px 28px 0px 28px;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 1px solid #969696;
    box-sizing: border-box;
  }

  .change-buttons {
    display: flex;
    justify-content: end;
    margin: 10px 32px 10px 32px;
  }

  .change-password-button {
    border-radius: 10px;
    border: none;
    background: #323232;
    color: white;
    height: 31px;
    width: 133px;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    margin: 5px;
  }

  .change-profile-button {
    height: 31px;
    width: 75px;
    margin-right: 27px;
    border:none;
    color: white;
    left: 1117px;
    top: 712px;
    border-radius: 10px;
    background: #323232;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: 5px;
  }
  .withdrawal-button {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #969696;
    background-color: transparent;
    border: none;
    margin-top: 20px;
    margin-right : 750px;
  }
`

export default function MyProfileSection() {
  return (
    <MyProfileWrap>
      <div id='myprofile-section'>
        <div className="myprofile-container">
          <div className='partition'>
            <div className="box-photo">사진</div>
            <div className="profile-info-section">
                <div className="profile-info-email">사용자@email</div>
                <input className="profile-info-nickname" type="text" placeholder="닉네임"/>
                <select className="profile-info-age">
                  <option value="age" selected>연령대</option>
                  <option value="teenages">10대</option>
                  <option value="twenty">20대</option>
                  <option value="thirty">30대</option>
                  <option value="forty">40대</option>
                  <option value="fifty">50대</option>
                  <option value="sixty">60대</option>
                  <option value="seventy">70대</option>
                </select>
                <select className="profile-info-gender">
                  <option value="" selected>성별</option>
                  <option value="teenages">남자</option>
                  <option value="twenty">여자</option>
                  <option value="thirty">선택안함</option>
                </select>
            </div>
          </div>
          <textarea className="profile-introducing" placeholder="소개글을 작성해주세요"/>
          <div className="change-buttons">
            <button className="change-password-button">비밀번호 변경</button>
            <button className="change-profile-button">변경</button>
          </div>
        </div>
        <button className="withdrawal-button">회원탈퇴</button>
      </div>
    </MyProfileWrap>
  )
}