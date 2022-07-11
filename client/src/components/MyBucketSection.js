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
  height: calc(100vh - 300px) ;
  flex-direction: column;
  align-items: center;

  .search-bar {
    align-self: center;
    position: relative;
    width: 40vw;
  }
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