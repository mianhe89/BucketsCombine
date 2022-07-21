import { closeUserInfoModal, openMyCardModal, openMyStampedModal } from "../../redux/reducers/ModalReducer";
import { useDispatch } from "react-redux";
import ModalPortal from "./ModalPortal";
import useOutSideClick from "../hook/UseOutSideClick";
import React, { useRef } from "react";
import styled from "styled-components";

const UserInfoModal = styled.div`
    width: 30vw;
    height: 60vh;
    display: flex;
    border-radius: 20px 20px 20px 20px;
    border: solid rgb(170, 170, 170);
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 40vw;
    top: 20vh;
    z-index: 30;
    .UserInfoCard{
        position: relative;
        width: 30vw;
        height: 60vh;
        background-color: rgba(255, 255, 255);
        border-radius: 20px 20px 20px 20px;
        animation: fadein 0.5s;
        -moz-animation: fadein 0.5s;
        -webkit-animation: fadein 0.5s;
        -o-animation: fadein 0.5s;
        z-index: 30;
        @keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @-moz-keyframes fadein { 
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @-webkit-keyframes fadein { 
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @-o-keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

    .close-btn {
        margin: 1px;
        position: absolute;
        display: flex;
        border: none;
        width: 20px;
        height: 20px;
        top: 1vh;
        right: 1vw;
        background: none;
        z-index: 50;
    }

    .user-img{
        position: absolute;
        border: solid rgb(170, 170, 170);
        border-radius: 20px 20px 20px 20px;
        width: 9vw;
        height: 15vh;
        left: 1vw;
        top: 5vh;
    }

    .useremail{
        position: absolute;
        left: 11vw;
        top: 15vh;
        width: 10vw;
        height: 5vh;
    }
    
    .username{
        position: absolute;
        font-size: 25px;
        left: 2vw;
        top: 23vh;   
    }

    .user-age{
        position: absolute;
        border: solid rgb(170, 170, 170);
        border-radius: 5px 5px 5px 5px;
        align-items: center;
        text-align: center;
        width: 4vw;
        height: 3vh;
        left: 2vw;
        top: 30vh;
    }

    .user-gender{
        position: absolute;
        border: solid rgb(170, 170, 170);
        border-radius: 5px 5px 5px 5px;
        align-items: center;
        text-align: center;
        width: 4vw;
        height: 3vh;
        left: 7vw;
        top: 30vh;
    }

    .userIntroduction{
        margin: 1px;
        padding: 1em;
        text-align: left;
        position: absolute;
        background:none;
        border: none;
        display: flex;
        position: absolute;
        width: 20vw;
        height: 20vh;
        left: 1vw;
        top: 33vh;
    }

    .exile-btn{
        position: absolute;
        display: flex;
        background: none;
        border: none;
        color: #969696;
        right: 1px;
        top: 55vh;
    }

`

const UserInfoCardModal = () => {
    const dispatch = useDispatch();
    const modalRef = useRef(null);
    const handleClose = () => {
        dispatch(closeUserInfoModal())
    };
    useOutSideClick(modalRef, handleClose);
    const exile = '> 카드에서 추방'
    return (
        <ModalPortal>
            <UserInfoModal>
                <div className="UserInfoCard" ref={modalRef}>
                <button className="close-btn" onClick={() => {
                    dispatch(closeUserInfoModal())
                    dispatch(openMyCardModal())
                    dispatch(openMyStampedModal())
                }}>X</button>
                <img className="user-img" src="images/bucketscombine_logo.png" alt="card" />
                <div className="useremail">유저.email</div>
                <div className="username">유저 닉네임</div>
                <div className="user-age">20대</div>
                <div className="user-gender">남자</div>
                <div className="userIntroduction">소개글</div>
                <button className="exile-btn" onClick={() => {
                    dispatch(closeUserInfoModal())}}>{exile}</button>
                </div>
            </UserInfoModal>
        </ModalPortal>
    );
}

export default UserInfoCardModal;


