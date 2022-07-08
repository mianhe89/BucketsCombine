import React from 'react';
import { useSelector, useState, useDispatch } from 'react-redux';
import { openModal } from './modals/ModalSlice';
import Modal from './Modal'

export default function MainSection(){
  const dispatch = useDispatch();
  return(
    <div>
      <button className='btn-clear-btn' onClick={()=> {dispatch(openModal())}}>
       clear
      </button>
    </div>
  )
};