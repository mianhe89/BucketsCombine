import { closeModal } from "../../redux/reducers/ModalReducer";
import { useDispatch } from "react-redux";
import ModalPortal from "./ModalPortal";
import useOutSideClick from "../hook/UseOutSideClick";
import React, { useRef } from "react";
import styled from "styled-components";

const ChangePasswordModal = styled.div`
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
    z-index: 10;
    .changePasswordCard{
        position: relative;
        width: 30vw;
        height: 60vh;
        background-color: rgba(255, 255, 255);
        border-radius: 20px 20px 20px 20px;
        animation: fadein 0.5s;
        -moz-animation: fadein 0.5s;
        -webkit-animation: fadein 0.5s;
        -o-animation: fadein 0.5s;
        
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

    .logo_img{
        position: absolute;
        width: 10vw;
        height: 15vh;
        left: 10vw;
        top: 7vh;
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
        z-index: 15;
    }

    .newPassword {
        position: absolute;
        width: 20vw;
        height: 3vh;
        left: 5vw;
        top: 25vh;
    }

    .newPasswordComfirm {
        position: absolute;
        width: 20vw;
        height: 3vh;
        left: 5vw;
        top: 35vh;
    }

    .passwordchange-btn{
        position: absolute;
        background-color: rgb(255, 190, 0);
        border: none;
        border-radius: 5px 5px 5px 5px;
        width: 20vw;
        height: 7vh;
        left: 5vw;
        top: 45vh;
    }
`
const ChangePasswordCardModal = () => {
    const dispatch = useDispatch();
    const modalRef = useRef(null);
    const handleClose = () => {
        dispatch(closeModal())
    };
    useOutSideClick(modalRef, handleClose);
    return (
        <ModalPortal>
            <ChangePasswordModal>
                    <div className="changePasswordCard" ref={modalRef}>
                        <button className="close-btn" onClick={() => {
                            dispatch(closeModal())
                        }}>X</button>                  
                        <img className="logo_img" src="images/bucketscombine_logo.png" alt="card" />
                        <input className='newPassword' type='password' placeholder='새로운 비밀번호'></input>
                        <input className="newPasswordComfirm" type='password' placeholder='새로운 비밀번호 재확인'></input>   
                        <button className="passwordchange-btn" onClick={() => {
                            dispatch(closeModal())
                        }}>비밀번호 변경</button>
                    </div>
            </ChangePasswordModal>
        </ModalPortal>
    );
}

export default ChangePasswordCardModal;