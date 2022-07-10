import { useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CardColumn from "./CardColumn";
import Loader from "./Loader";


const CardColumnWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  overflow-y: auto;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

export default function ColumnList () {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target  ]);

  return (
    <>
      <CardColumnWrap>
      <button className='create-card-button'>+</button>
        {itemLists.map((v, i) => {
          return <CardColumn number={i + 1} key={i} />;
        })}
        <div ref={setTarget} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </CardColumnWrap>
    </>
  );
};
