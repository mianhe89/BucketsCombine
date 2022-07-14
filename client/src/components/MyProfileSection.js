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
<<<<<<< HEAD
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
=======
    background-color: #ededed;
    width: 85vh;
    height: 70vh;
    border-radius: 20px;
    flex-direction: column;
    height: 588px;
    width: 847px;
    left: 372px;
    top: 177px;
    border-radius: 20px;

    
  }
  .box-photo {
    margin-top: 23px;
    margin-left: 23px;
    background-color: white;
    width: 148px;
    height: 148px;
    float: left;
    box-shadow: 0px 4px 4px 0px #00000040;
    height: 148px;
    width: 148px;
    left: 395px;
    top: 200px;
    border-radius: 15px;
    border: 1px solid #969696;
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #969696;
    
  }
  .profile-info-section {
    display: flex;
    width: 350px;
    height: 30vh;
    float: right;
    margin-right: 30px;
    margin-top:28
>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b
    
  }
  .profile-info-detail {
    margin-top: 20px;
    margin-left: 30px
  }
  .profile-info-email{
<<<<<<< HEAD
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
=======
    height: 40px;
    width: 330px;
    left: 861px;
    top: 205px;
    border-radius: 5px;
    background: #8F8F8F;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
  }
  .profile-info-nickname {
    height: 40px;
    width: 330px;
    left: 861px;
    top: 257px;
    border-radius: 5px;
    margin-top: 12px;
>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b
    background-color: white;
    border-radius: 10px;
    border: none;
  }
  .profile-info-age {
<<<<<<< HEAD
    width: 20vw;
    height: 40px;
    margin-top: 10px;
=======
    height: 40px;
    width: 330px;
    left: 861px;
    top: 257px;
    border-radius: 5px;
    margin-top: 12px;
>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b
    background-color: white;
    border-radius: 10px;
    border: none;
  }
  .profile-info-gender {
<<<<<<< HEAD
    width: 20vw;
    height: 40px;
    margin-top: 10px;
=======
    height: 40px;
    width: 330px;
    left: 861px;
    top: 257px;
    border-radius: 5px;
    margin-top: 12px;
>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b
    background-color: white;
    border-radius: 10px;
    border: none;
  }
  .box-profile-introducing 
  {
<<<<<<< HEAD
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
=======
    border-radius: 10px;
    margin-left: 23px;
    margin-right: 27px;
    margin-top: 25px;
    margin-bottom: 20px;
    background-color: white;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 797px;
    height: 251px;
    left: 395px;
    top: 432px;
>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b

  }
  .profile-change-button {
    display: flex;
<<<<<<< HEAD
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 10px;
  }
  .change-password-button {
    display: flex;
    margin-right: 30px;
=======
    justify-content: end;
    width: 847px;
    height: 82px;

  }
  .change-password-button {
    display: flex;
    margin-right: 15px;
>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
<<<<<<< HEAD
=======
    height: 31px;
    width: 133px;
    left: 969px;
    top: 712px;
    border-radius: 10px;

  }
  .change-password-btw-detail {
    width: 116px;
    height: 19px;
    left: 986px;
    top: 717px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-top: 5px;

>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b
  }
  .change-button {
    display: flex;
    justify-content: flex-end;
<<<<<<< HEAD
    margin-right: 20px;
    border-radius: 10px;
    border:none;
    background-color: black;
    color: white;

  }
  .profile-signout {
    margin-top: 5px;
    margin-left: 24vw;
=======
    margin-right: 27px;
    border:none;
    color: white;
    height: 31px;
    width: 75px;
    left: 1117px;
    top: 712px;
    border-radius: 10px;
    background: #323232;

    .change-button-detail {
    width: 58px;
    height: 19px;
    left: 1139px;
    top: 717px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-top: 5px;
    }



  }
  .profile-signout {
    width: 83px;
height: 22px;
left: 379px;
top: 782px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
/* identical to box height */
color: #969696;
margin-left: 250px;
margin-top: 17px;
>>>>>>> 92f8e900acf25385aa267925be6d7fa798845c6b
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
        <div><input className="box-profile-introducing" type="text" placeholder="기존 소개글이 적혀있고 수정가능"></input></div>
        
        <div className="profile-change-button">
          <button className="change-password-button"><div className="change-password-btw-detail">비밀번호 변경 </div></button>
          <button className="change-button"><div className="change-button-detail">변경</div></button>
        </div>
    </div>
    <div className="profile-signout"> 회원탈퇴 </div>
    </div>
    </MyProfileWrap>
  )
}