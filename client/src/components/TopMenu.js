import React from 'react';
import styled from 'styled-components';

const TopMenuWrap = styled.div`
  .topmenu {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    width: 100vw;
    height: 80px;
    align-items: center;
    position: fixed;
    z-index: 10;
  }

  .topmenu-title {
    font-size: 28px;
    margin-left: 140px;
  }

  .topmenu-button {
    align-self: center;
    margin-right: 30px;
    border: none;
    box-shadow: none;
    width: 100px;
    height: 36px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #FFC700;
  }
`

export default function Topmenu(){
  return(
    <TopMenuWrap>
    <div className='topmenu'>
      <div className='topmenu-title'>Buckets Combine</div>
      <button className='topmenu-button'>로그인</button>
    </div>
    </TopMenuWrap>
  )
}