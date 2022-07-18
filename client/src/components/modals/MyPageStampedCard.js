import { closeModal } from "../../redux/reducers/ModalReducer.js";
import { useDispatch } from "react-redux";
import React, { useRef } from "react";
import useOutSideClick from "../hook/UseOutSideClick.js";
import styled from 'styled-components';
import ModalPortal from "./ModalPortal.js";



const MainPageStampedModal = styled.div`
    width: 70vw;
    height: 60vh;
    display: flex;
    border-radius: 20px 20px 20px 20px;
    border: solid rgb(170, 170, 170);
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 20vw;
    top: 20vh;
    box-shadow: 3px 3px 5px 5px rgb(194, 194, 194, 0.3);
    z-index: 10;
    .mainPageStampedCard{
        position: relative;
        width: 70vw;
        height: 60vh;
        background-color: rgba(255, 255, 255, 0.8);
        border: solid rgb(170, 170, 170);
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
        .modal-title {
            margin: 15px;
            position: absolute;
            font-size: calc(10px + 2vmin);
            top: 1vh;
            left: 1vw;
        }
    }

    .blur {
        border-radius: 20px 20px 20px 20px;
        backdrop-filter: blur(5px);
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

    .userInfo-btn {
        position: absolute;
        justify-content: center;
        background: none;
        border: none;
        width: 10vw;
        left: 1vw;
        top: 17vh;
    }
    
    .card-tag  {
        position: absolute;
        align-self: center;
        display: flex;
        justify-content: center;
        left: 1vw;
        top: 12vh;
    }
    
    .card-img {
        margin: 10px;
        position: absolute;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 10px 10px;
        border: none;
        width: 15vw;
        height: 40vh;
        right: 1vw;
        top: 7vh;
    }
    
    .card-info {
        position: absolute;
        width: 30px;
        height: 20px;
        left: 1vw;
        top: 25vh;
    }
    
    .card-info-text {
        margin: 5px;
        padding: 1em;
        text-align: left;
        position: absolute;
        background:none;
        border: none;
        display: flex;
        position: absolute;
        width: 50vw;
        height: 20vh;
        left: 1vw;
        top: 30vh;
    };`

const MainPageStampedCardModal = () => {
    const dispatch = useDispatch();
    const modalRef = useRef(null);
    const handleClose = () => {
        dispatch(closeModal())
    };
    useOutSideClick(modalRef, handleClose);
    return (
        <ModalPortal>
            <MainPageStampedModal ref={modalRef}>
                <div className="blur">
                    <div className="mainPageStampedCard">
                    <h4 className=" modal-title">카드 제목</h4>
                    <button className="close-btn" onClick={() => {
                        dispatch(closeModal())
                    }}>X</button>                      
                    <div className="card-tag">#태그</div>
                    <button className="userInfo-btn">참석한 유저 정보</button>
                    <img className="card-img" src="images/card-img.jpg" alt="card" />
                    <div className="card-info">설명</div>
                    <div className="card-info-text">버킷 내용</div>
                    </div>
                </div>
            </MainPageStampedModal>
        </ModalPortal>
    );
}

export default MainPageStampedCardModal;