import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeMode } from "../redux/reducers/ModalReducer";
import { openModal } from "../redux/reducers/ModalReducer";
import MainPageCardModal from "./modals/MainPageCardModal";
import MainPageStampedCardModal from './modals/MainPageStampedModal'

const StampedCardWrap = styled.div`

  .card {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 330px;
    border-radius: 15px;
    margin: 10px;
    background-size: cover;
  }

  .card-info {
    margin: 10px;
    color: white;
  }

  .card-title {
    font-size: 26px;
    color: white;
    height: 105px;
    margin: 10px;
  }

  .card-tegs {
    color: white;
    height: 85px;
    margin: 10px;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .card-writer {
    margin-left: 10px;
  }

  .card-member {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    font-size: 1em;
    color: black;
    background-color: white;
    font-display: flex;
    text-align: center;
    line-height: 60px;
  }`


export default function StampedCard ({ background }) {
 const dispatch = useDispatch();

 let backgroundImageStyle = {
   backgroundImage: "url(https://source.unsplash.com/random)"
 }

  return (
    <StampedCardWrap>
      <div className='card' style={backgroundImageStyle} onClick={() => {dispatch(openModal())}}>
      </div>
    </StampedCardWrap>
  );
};
