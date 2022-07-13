import React from 'react';
import { useSelector, useState, useDispatch } from 'react-redux';
import { openModal } from './modals/ModalSlice';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  align-self: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: yellow;
  left: 60vw;
  top: 5vh;
   `;
export default function MainSection(){
  const dispatch = useDispatch();
  return(
    <div>
      <StyledButton onClick={()=> {dispatch(openModal())}}>
        담기
      </StyledButton>
    </div>
  )
};