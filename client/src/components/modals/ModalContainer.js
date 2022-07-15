import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal.js';
import { closeModal } from '../../redux/reducers/ModalReducer.js';
import { useDispatch } from 'react-redux';

const Overlay = styled.aside`
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
    z-index: 1;
    .blur {
        border-radius: 20px 20px 20px 20px;
        backdrop-filter: blur(10px);
    }
`
const CloseButton = styled.button `
    margin: 1px;
    position: absolute;
    display: flex;
    border: none;
    width: 20px;
    height: 20px;
    top: 1vh;
    right: 1vw;
    background: none;
    z-index: 2;
`
const ModalWrap = styled.div`
    margin: 0px;
`
const Contents = styled.div`
    margin: 0px;
    padding: 0px;
`

const ModalFrame = ({ onClose, children }) => {
    const dispatch = useDispatch()
    const modalRef = useRef(null);
    const handleClose = () => {
        onClose=dispatch(closeModal());
    };
    return (
        <ModalPortal>
            <Overlay>
                <div className='blur'>
                <ModalWrap ref={modalRef}>
                    <CloseButton onClick={()=> {
                     handleClose()}}>
                       X
                    </CloseButton>
                    <Contents>{children}</Contents>
                </ModalWrap>
                </div>
            </Overlay>
        </ModalPortal>
    );
}

export default ModalFrame;