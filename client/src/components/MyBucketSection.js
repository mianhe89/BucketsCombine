import React from 'react';

// 스타일 컴포넌트 작성 태그전달

export default function MyBucketSection(){
  return(
    <div id='mybucket-section'>
      <div className='card-list-column'>
        <button className='create-card-button'>+</button>
        <div className='card-column'>
          <div className='card-progress'/>
          <div className='card-column-info'>
            <div className='card-column-info-text'>
              <div>제목</div>
              <div>태그</div>
            </div>
            <div>작성자</div>
            <img className='share-icon' src='/images/share-icon.png' />
            <div className='card-member-column'>
              4명
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}