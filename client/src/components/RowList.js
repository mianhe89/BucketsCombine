import { useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import HorizontalScroll from 'react-scroll-horizontal';
import RowCard from "./RowCard";
import Loader from "./Loader";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'


const RowListWrap = styled.div`
  #card-list {
    width: calc(100vw - 240px);
    height: 400px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }

  .dummy {
    width: 10px;
    height: 100px;
  }

  .Target-Element {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .search-bar {
    align-self: center;
    position: relative;
    top: 50px;
    margin-left: 0px;
    width: 40vw;
    min-width: 500px;
    z-index: 2;
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

  #card-list-mobile {
    width: calc(100vw - 100px);
    height: 400px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }

  .search-bar-mobile {
    align-self: center;
    position: relative;
    top: 10px;
    margin-left: 0px;
    width: 400px;
    z-index: 1;
  }
`;


export default function RowList () {
  const isDesktop = useMediaQuery({ minWidth: 921 })

  const [cards, setCards] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:80/')
    .then(res => {
      const cardsData = res.data.data.cardinfo;
      // dispatch(setCardsData({ cardsData }));
      setCards(
        cardsData.map((card, i) => {
        return <RowCard
          key={i}
          cardID={card}
          writerID={card.users_id}
          title={card.title}
          cardtext={card.cardtext}
          background={card.background}
          createdAt={card.createdAt}
          completed={card.completed}
        />;
      }))
    })
  }, []);

  // const userInfo = useSelector((state) => state.user);


  const [search, setSearch] = useState("");

  return (
    <RowListWrap >
      <div id={isDesktop ? 'card-list' : 'card-list-mobile'} >
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          style={{}}
        >
          <div className="dummy" />
          {cards}
          <div className="dummy" />
        </HorizontalScroll>
        <div className={isDesktop? 'search-bar' : 'search-bar-mobile'}>
          <input className='search-input' type="text" placeholder="제목 및 태그" onChange={(e) => {
            console.log(search)
            setSearch(e.target.value)
          }} />
          <img className='search-icon' src='/images/search-icon.png' />
        </div>
      </div>
    </RowListWrap>
  );
};


