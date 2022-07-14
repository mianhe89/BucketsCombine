import React from 'react';
import ColumnList from './ColumnList';
import styled from 'styled-components';

// 스타일 컴포넌트 작성 태그전달

const MyBucketWrap = styled.div `
  #mybucket-section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 120px);
    height: 100vh;
    margin-left: 120px;
  }

  .card-list-column {
  width: 70vw;
  max-width: 1000px;
  height: calc(100vh - 400px) ;
  flex-direction: column;
  align-items: center;
  }

  .search-bar {
    margin-top: 50px;
    align-self: center;
    position: relative;
    margin-left: 0px;
    height: 10px;
    width: calc(70vw - 100px);
    max-width: 700px;
  }

  .search-input {
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
  }

  .search-icon {
    position : absolute;
    width: 17px;
    top: 10px;
    right: 0px;
    margin: 0px;
  }

  .fog-top {
    position: absolute;
    top: 170px;
    width: 70vw;
    max-width: 1000px;
    height: 30px;
    background: -webkit-linear-gradient(top,white 0%,rgba(0,0,0,0) 100%);
  }

  .fog-bottom {
    position: absolute;
    bottom: 210px;
    width: 70vw;
    max-width: 1000px;
    height: 40px;
    background: -webkit-linear-gradient(bottom,white 0%,rgba(0,0,0,0) 100%);
  }
`

export default function MyBucketSection(){
  return(
    <MyBucketWrap>
    <div id='mybucket-section'>
      <div className='fog-top'/>
      <div className='card-list-column'>
      <div className='fog-bottom'/>
        <ColumnList />
      </div>
      <div className='search-bar'>
          <input className='search-input' type="text" placeholder="제목 및 태그" />
          <img className='search-icon' src='/images/search-icon.png' />
      </div>
    </div>
    </MyBucketWrap>
  )
}