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
    width: 40vw;
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
`

export default function MyBucketSection(){
  return(
    <MyBucketWrap>
    <div id='mybucket-section'>
      <div className='card-list-column'>
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