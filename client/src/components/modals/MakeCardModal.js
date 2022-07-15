import { closeModal } from "../../redux/reducers/ModalReducer.js";
import { useDispatch } from "react-redux";
import React from "react";
import styled from 'styled-components';
import { Tag } from '../Tag'

const MakeModalContainer = styled.aside`
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
    z-index: 2;

    .modal {
    position: relative;
    width: 70vw;
    height: 60vh;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px 20px 20px 20px;
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s;
    -webkit-animation: fadein 0.5s;
    -o-animation: fadein 0.5s;
    }
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
    .blur {
        backdrop-filter: blur(2px);
    }
    .modal-title {
        margin: 15px;
        position: absolute;
        font-size: calc(10px + 2vmin);
        top: 1vh;
        left: 1vw;
    }

    .card-tag  {
        position: absolute;
        align-self: center;
        display: flex;
        justify-content: center;
        left: 1vw;
        top: 12vh;
    }
    
    .btn-confirm-btn {
        position: absolute;
        align-self: center;
        display: flex;
        justify-content: center;
        background-color: rgb(251, 255, 0);
        border-radius: 5px 5px 5px 5px;
        border: none;
        width: 8vw;
        height: 2.5vh;
        left: 1vw;
        top: 55vh;
    }
    
    .btn-cancel-btn {
        margin: 1px;
        position: absolute;
        display: flex;
        border: none;
        width: 20px;
        height: 20px;
        top: 1vh;
        right: 1vw;
        background: none;
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
    }`;
const MakeModal = () => {
    const dispatch = useDispatch();
    return (
        <MakeModalContainer>
            <div className="modalContainer">
                <div className="modal">
                    <div className="modal blur">
                        <h4 className="modal title">제목을 입력하세요</h4>
                        <Tag></Tag>
                        <button type="button" className="btn-confirm-btn"onClick={()=> {
                            dispatch(closeModal());
                        }}>카드 만들기</button>
                        <button type="button" className="btn-cancel-btn" onClick={()=>{
                            dispatch(closeModal());
                            }}>
                            X
                        </button>
                        <img className="card-img" src="images/card-image.jpg" alt="card" />
                        <div className="card-info">설명</div>
                        <div className="card-info-text">설명을 입력하세요</div>
                    </div>
                </div>
            </div>
        </MakeModalContainer>
    );
}

export default MakeModal;