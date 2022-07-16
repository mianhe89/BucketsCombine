import { useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import HorizontalScroll from 'react-scroll-horizontal';
import RowCard from "./RowCard";
import Loader from "./Loader";


const RowListWrap = styled.div`
  #card-list {
    width: calc(100vw - 240px);
    height: 400px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
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
`;

export default function ColumnList () {
  const test = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
  const testmap = test.map(e=>{
    return {
      title: 'title'+e,
      tags: [e,e+e,e+e+e],
      writer: 'writer'+e,
      memberCount: 0,
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

  return (
      <RowListWrap >
        <div id='card-list'>
          <HorizontalScroll
            pageLock={true}
            reverseScroll={true}
            style={{}}
          >
            <div className="dummy"/>
            {itemLists.map((item, i) => {
              return <RowCard title={item.title} tags={item.tags} writer={item.writer} memberCount={item.memberCount} background={item.background} key={i} />;
            })}
            <div ref={setTarget} className="Target-Element">
              {isLoaded && <Loader />}
            </div>
          </HorizontalScroll>
        </div>
      </RowListWrap>
  );
};
