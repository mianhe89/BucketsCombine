import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
// import styled from 'styled-components;'

// let card = styled.div`
//   width: 200px;
//   height: 300px;
// `

const cards = [...new Array(10)].map((x, i) => ({
    name: `card ${i}`,
    img: "https://source.unsplash.com/random"
}));

export default function CardList(){
  return (
    <div id='card-list'>
      <HorizontalScroll
        pageLock={true}
        reverseScroll={true}
        // style={{ width: `100vw`, height: `400px` }}
        //config        = {{ stiffness: int, damping: int }}
        //className     = { string }
        //animValues    = { int }
      >
        {cards.map((card, index) => (
          <div key={index} className='card'>
          </div>
        ))}
      </HorizontalScroll>
    </div>
  );
}