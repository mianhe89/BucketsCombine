import { useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ColumnCard from "./ColumnCard";
import Loader from "./Loader";
import { changeMode, openModal } from "../redux/reducers/ModalReducer.js";
import { useDispatch, useSelector } from "react-redux";
import MakeModal from "./modals/MakeCardModal";
 


const ColumnListWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  overflow-y: auto;
  padding: 10px;

  .Target-Element {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .create-card-button {
    width: calc(70vw - 40px);
    max-width: 960px;
    height: 80px;
    border-radius: 15px;
    border: none;
    box-shadow: none;
    font-size: 32px;
    background-color: #d2d2d2;
    margin: 5px;
    line-height: 80px;
    text-align: center;
    align-self: flex-start;
    margin-left: 30px;
    margin-top: 20px;
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
    console.log(itemLists);
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
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target  ]);

  return (
    <>
      <ColumnListWrap>
      <button className='create-card-button'>+</button>
        {itemLists.map((item, i) => {
          return <ColumnCard title={item.title} tags={item.tags} writer={item.writer} memberCount={item.memberCount} background={item.background} key={i} />;
        })}
        <div ref={setTarget} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </ColumnListWrap>
    </>
  );
};
