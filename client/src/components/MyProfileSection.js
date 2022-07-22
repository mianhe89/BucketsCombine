import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openWithdrawalModal, openConfirmPasswordModal, openChangePasswordModal } from '../redux/reducers/ModalReducer';
import styled from 'styled-components'
import { useMediaQuery } from "react-responsive";
import { isDraft } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import axios from 'axios';

const MyProfileWrap = styled.div`
  #myprofile-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 120px);
    height: 100vh;
    min-height: 700px;
    margin-left: 120px;
  }
  .myprofile-container {
    display: flex;
    background-color: #ededed;
    border-radius: 20px;
    flex-direction: column;
    height: 588px;
    width: 70vw;
    max-width: 1000px;
    border-radius: 20px;
  }

  .image-container{
    width: 20vw;
    height: 20vw;
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

  .image{
    position: inherit;
    background: none;
    border: none;
    width: 200px;
    height: 40px;
    left: 1vw;
    top: 2vw;
  }

  .user-img{
    position: relative;
    background: none;
    border: none;
    justify-content: center;
    width: 148px;
    height: 148px;
    object-fit: fill;
    border-radius: 15px;
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
    justify-content: flex-end;
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
    top: 70px;
    position: relative;
    margin-right: auto;
  }

  #myprofile-section-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 120px);
    min-height: 700px;
  }

  .myprofile-container-mobile {
    display: flex;
    background-color: #ededed;
    border-radius: 20px;
    flex-direction: column;
    height: 588px;
    width: 90vw;
    max-width: 1000px;
    border-radius: 20px;
    background-color: #ededed;
  }

  .profile-info-section-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 200px;
  }
`

export default function MyProfileSection() {
  const isDesktop = useMediaQuery({ minWidth: 921 })
  const isTablet = useMediaQuery({ minWidth: 1201 })

  const userId = useSelector((state) => state.userId)
  // const { userData } = useSelector((state) => state.userData)
  const withdrawal = '> 회원탈퇴'
  const dispatch = useDispatch();
  const [ files, setFiles ] = useState('');
  const upLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  }
  const [ imageSrc, setImageSrc ] = useState('');
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    preview();
    return () => preview();
  });

  const preview = () => {
    if(!files){
      return false;
    }
  }
  const imgEl = document.querySelector('box-photo');
  const reader = new FileReader();
  reader.onload = () => {
    (imgEl.style.backgroundImage = `url(${reader.result})`);
  reader.readAsDataURL(files[0]);
  }
  const handleClick = (e) => {
    const formData = new FormData();
    formData.append('uploadImage', files[0]);
    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(`api`, formData, config);
  }
  return (
    <MyProfileWrap>
      <div id={isDesktop? 'myprofile-section' : 'myprofile-section-mobile'}>
        <div className={isDesktop? "myprofile-container" : "myprofile-container-mobile"}>
          <div className='partition'>
            <div className='image-container'>
            <div className="box-photo" placeholder='사진'>{imageSrc && <img className='user-img'src={imageSrc} alt="user-img" />}</div>
            <input type='file' className='image' accept='image/*' onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
            }} placeholder='사진'/>
            </div>
            <div className={isDesktop? "profile-info-section" : "profile-info-section-mobile"}>
                <div className="profile-info-email">사용자@email</div>
                <input className="profile-info-nickname" type="text" placeholder="닉네임"/>
                <select className="profile-info-age">
                  <option value="DEFAULT" >연령대</option>
                  <option value="teenages">10대</option>
                  <option value="twenty">20대</option>
                  <option value="thirty">30대</option>
                  <option value="forty">40대</option>
                  <option value="fifty">50대</option>
                  <option value="sixty">60대</option>
                  <option value="seventy">70대</option>
                </select>
                <select className="profile-info-gender">
                  <option value="DEFAULT" >성별</option>
                  <option value="teenages">남자</option>
                  <option value="twenty">여자</option>
                  <option value="thirty">선택안함</option>
                </select>
            </div>
          </div>
          <textarea className="profile-introducing" placeholder="소개글을 작성해주세요"/>
          <div className="change-buttons">
            <button className="withdrawal-button" onClick={() => {dispatch(openConfirmPasswordModal())}}>{withdrawal}</button>
            <button className="change-password-button" onClick={() => {dispatch(openChangePasswordModal())}} >비밀번호 변경</button>
            <button className="change-profile-button" onClick={handleClick}>변경</button>
          </div>
        </div>
      </div>
    </MyProfileWrap>
  )
}