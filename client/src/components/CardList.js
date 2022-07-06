import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';


const cards = [...new Array(10)].map((x, i) => ({
    name: `card ${i}`,
    img: "https://source.unsplash.com/random"
}));

export default function StampedList(){
  return (
    <HorizontalScroll
      pageLock={true}
      reverseScroll={true}
      style={{ width: `60em`, height: `400px` }}
      //config        = {{ stiffness: int, damping: int }}
      //className     = { string }
      //animValues    = { int }
    >
      {cards.map(card => (
        <div style={{ width: "500px", height: "500px", background: "red" }}>
          <img src={card.img} alt="" />
          <p>{card.name}</p>
        </div>
      ))}
    </HorizontalScroll>
  );
}