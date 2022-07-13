import React from 'react';
import styled from 'styled-components';

const MainSectionWrap = styled.div`
#main-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 120px);
  height: 100vh;
  min-height: 700px;
  margin-left: 120px;
}
.main-ment {
  width: 500px;
  margin-left: 60px;
  position: absolute;
  top: 150px;
}
.ment-title {
  font-size: 48px;
  margin-bottom: 20px;
}

.ment-description {
  font-size: 16px;
  line-height: 32px;
}
.videos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  height: 70%;
  margin-left: calc(53vw - 120px);
}
.video {
  display: flex;
  /* width: 30%; */
  width: 30%;
  height: 100%;
  margin: 10px;
  object-fit: cover;
  border-radius: 1.8vh;
}
`

export default function MainSection(){
  return(
    <MainSectionWrap>
    <div id='main-section'>
      <div className="main-ment">
        <div className='ment-title'>
          사람들과 함께<br />버킷리스트를 이뤄보세요
        </div>
        <div className='ment-description'>
        누구나 오랫동안 이루고 싶은 일들이나<br />
        시간이 지나가기 전에 해보고 싶은 일들을<br />
        마음에 품고 있습니다.<br />
        혼자서도 해낼 수 있지만<br />
        여럿과 함께한다면 성취하기 더 쉬울 것입니다.<br />
        또한 다른 사람에게서 새로운 목표를 얻을 수도 있겠죠.<br />
        여러분의 성취 Buckets Combine이 도와드립니다.
        </div>
      </div>
      <div className='videos'>
        <video className="video" autoPlay muted loop>
          <source src="/videos/A.mp4" type="video/mp4"></source>
        </video>
        <video className="video" autoPlay muted loop>
          <source src="/videos/B.mp4" type="video/mp4"></source>
        </video>
        <video className="video" autoPlay muted loop>
          <source src="/videos/C.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
    </MainSectionWrap>
  )
}