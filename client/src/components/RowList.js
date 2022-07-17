import { useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import HorizontalScroll from 'react-scroll-horizontal';
import RowCard from "./RowCard";
import Loader from "./Loader";
import { useSelector, useDispatch } from 'react-redux'
import { setCards }  from '../redux/reducers/CardsReducer'
import { cardsAction } from '../redux/actions/CardAction'
import { useMediaQuery } from "react-responsive";


const RowListWrap = styled.div`
  #card-list {
    width: calc(100vw - 240px);
    height: 400px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }

  .dummy {
    width: 200px;
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

  const cardState = useSelector((state) => state.cards);
  // const stampedsState = useSelector((state) => state.card);
  // const bucketState = useSelector((state) => state.cartReducer);
  // const { items } = cardState;
  // const { cartItems } = cartState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsAction.fetchData('', cardsAction.setCards));
  }, []);

  // const handleClick = (item) => {
  //   if (!cartItems.map((el) => el.itemId).includes(item.id)) {
  //     dispatch(addToCart(item.id));
  //     dispatch(notify(`장바구니에 ${item.name}이(가) 추가되었습니다.`));
  //   } else {
  //     dispatch(notify('이미 추가된 상품입니다.'));
  //   }
  // };

  const test = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
  const testmap = test.map(e=>{
    return {
      title: 'title'+e,
      tags: [e,e+e,e+e+e],
      writer: 'writer'+e,
      member: ['user1','user2'],
      background: 'card-' + e,
    }
  })
  
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState(testmap);

  useEffect(() => {
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = testmap;
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: `0`
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target  ]);

  const [search, setSearch] = useState("");

  return (
    <RowListWrap >
      <div id={isDesktop ? 'card-list' : 'card-list-mobile'} onClick={cardsAction.testfunction}>
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          style={{}}
        >
          <div className="dummy" />
          {itemLists.map((card, i) => {
            return <RowCard
              key={i}
              id={i}
              title={card.title}
              tags={card.tags}
              writer={card.writer}
              member={card.member}
              background={card.background}
            />;
          })}
          <div ref={setTarget} className="Target-Element">
            {isLoaded && <Loader />}
          </div>
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
