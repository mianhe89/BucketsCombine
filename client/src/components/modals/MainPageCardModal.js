import { closeMainPageCardModal } from "../../redux/reducers/ModalReducer.js";
import { useSelector, useDispatch } from "react-redux";
import React, { useRef } from "react";
import useOutSideClick from "../hook/UseOutSideClick.js";
import styled from 'styled-components';
import ModalPortal from "./ModalPortal.js";

const MainPageModal = styled.div`
    .modal-container {
        width: 70vw;
        max-width: 1200px;
        height: 60vh;
        min-height: 460px;
        max-height: 700px;
        display: flex;
        border-radius: 20px ;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        margin-left: 60px;
        z-index: 10;
        border: solid #5E5E5E;
        border-width: 1px;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        animation: fadein 0.3s;
        -moz-animation: fadein 0.3s;
        -webkit-animation: fadein 0.3s;
        -o-animation: fadein 0.3s;
        box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.2);
    }

    .mainPageCard {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .card-img {
        margin-right: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        border: none;
        width: 260px;
        height: 390px;
        background-size: cover;
    }

    .modal-title {
        position: absolute;
        width: calc(100% - 370px);
        font-size: 30px;
        font-weight: 1000;
        top: 60px;
        left: 60px;
        margin: auto;
    }

    .card-tag  {
        position: absolute;
        width: calc(100% - 370px);
        left: 60px;
        top: 120px;
        font-size: 18px;
    }

    .userinfo {
        display: flex;
        flex-direction: row;
        position: absolute;
        width: calc(100% - 370px);
        left: 60px;
        top: 160px;
        font-size: 18px;
    }

    .card-description {
        position: absolute;
        width: calc(100% - 370px);
        font-size: 16px;
        top: 240px;
        left: 60px;
    };

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
    
    .btn-confirm-btn {
        align-self: flex-end;
        margin-right: auto;
        background-color: #FFC700;
        border-radius: 10px;
        border: none;
        width: 120px;
        height: 30px;
        position: relative;
        left: 30px;
        bottom: 30px;
        font-size: 14px;
    }

    .username {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 15px;
    }

    .profile-image {
        background-color: #CCCCCC;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-left: 4px;
        margin-right: 14px;
    }
`    
    


const MainPageCardModal = ({
    
    }) => {
    const modalCardID = useSelector((state) => state.modal.modalCardID);
    const {cardsData} = useSelector((state) => state.modal.cardsData);

    const cardData = cardsData.filter(card => card.id === modalCardID);
    
    const title = cardData[0].title;
    const cardtext = cardData[0].cardtext;
    let backgroundImageStyle = {
        backgroundImage: "url(/images/card-" + cardData[0].background + ".jpg)",
      };

    const dispatch = useDispatch();
    const modalRef = useRef(null);
    const handleClose = () => {
        dispatch(closeMainPageCardModal())
    };
    useOutSideClick(modalRef, handleClose);
    return (
        <ModalPortal>
            <MainPageModal ref={modalRef}>
                <div className="modal-container" >
                    <div className="mainPageCard" >
                        <h4 className=" modal-title">{title}</h4>                      
                        <div className="card-tag">#태그</div>
                        <div className="userinfo">
                            <div className="username">작성자유저이름<div className="profile-image"/></div>
                            <div className="username">참가자유저이름<div className="profile-image"/></div>
                            <div className="username">참가자유저이름<div className="profile-image"/></div>
                            <div className="username">참가자유저이름<div className="profile-image"/></div>
                        </div>
                        <button className="close-btn" onClick={() => {
                            dispatch(closeMainPageCardModal())
                        }}>X</button>
                        <button type="button" className="btn-confirm-btn"
                            onClick={()=> {
                            dispatch(closeMainPageCardModal())}}>
                            담기 및 참가
                        </button>
                        <div className="card-img" style={backgroundImageStyle} />
                        <div className="card-description">{cardtext}</div>
                    </div>
                </div>
            </MainPageModal>
        </ModalPortal>
    );
}

export default MainPageCardModal;