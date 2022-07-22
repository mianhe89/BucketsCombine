import { closeMakeCardModal } from "../../redux/reducers/ModalReducer.js";
import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import useOutSideClick from "../hook/UseOutSideClick.js";
import styled from 'styled-components';
import ModalPortal from "./ModalPortal.js";

const MakeCardModalContainer = styled.div`
    width: 70vw;
    height: 60vh;
    display: flex;
    border-radius: 20px 20px 20px 20px;
    border: solid rgb(170, 170, 170);
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 20vw;
    top: 20vh;
    box-shadow: 3px 3px 5px 5px rgb(194, 194, 194, 0.3);
    z-index: 10;
    .mainPageMakeCard{
        position: relative;
        width: 70vw;
        height: 60vh;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 20px 20px 20px 20px;
        animation: fadein 0.5s;
        -moz-animation: fadein 0.5s;
        -webkit-animation: fadein 0.5s;
        -o-animation: fadein 0.5s;
        @keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @-moz-keyframes fadein { 
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @-webkit-keyframes fadein { 
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @-o-keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

    .blur {
        border-radius: 20px 20px 20px 20px;
        backdrop-filter: blur(5px);
    }

    .modal-title {
        margin: 15px;
        position: absolute;
        font-size: calc(10px + 2vmin);
        top: 1vh;
        left: 1vw;
    }

    .close-btn {
        margin: 1px;
        position: absolute;
        display: flex;
        border: none;
        width: 20px;
        height: 20px;
        top: 1vh;
        right: 1vw;
        background: none;
        z-index: 15;
    }
    
    .makeCard-btn {
        position: absolute;
        align-self: center;
        display: flex;
        justify-content: center;
        background-color: rgb(251, 255, 0);
        border-radius: 5px 5px 5px 5px;
        border: none;
        width: 8vw;
        height: 2.5vh;
        left: 1vw;
        top: 55vh;
    }
    
    .card-img {
        margin: 10px;
        position: absolute;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 10px 10px;
        border: none;
        width: 15vw;
        height: 40vh;
        right: 1vw;
        top: 7vh;
    }
    
    .card-info-text {
        margin: 5px;
        padding: 1em;
        text-align: left;
        position: absolute;
        background:none;
        border: solid rgb(170, 170, 170 );
        display: flex;
        position: absolute;
        width: 45vw;
        height: 20vh;
        left: 1vw;
        top: 30vh;
    }
    .failure-message{
        position: absolute;
        color: red;
        left: 10vw;
        top:55vh;
    }`;

const TagsInput = styled.div`
    position: absolute;
    margin: 2px;
    display: inline-flexbox;
    align-items: flex-start;
    flex-wrap: wrap;
    box-sizing: content-box;
    width: 40vw;
    height: 10vh;
    padding: 0 8px;
    border: 1px solid rgb(214, 216, 218);
    border-radius: 6px;
    left: 3vw;
    top: 15vh;

    > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
        width: auto;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        padding: 0 8px;
        font-size: 14px;
        list-style: none;
        border-radius: 6px;
        margin: 0 8px 8px 0;
        background: rgb(255, 255, 255);
        > .tag-close-icon {
            display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 14px;
            margin-left: 8px;
            color: #4000c7;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
            }
        }
    }

    > input {
    width: 40vw;
    height: 5vh;    
    flex: 1;
    border: none;
    border-radius: inherit;
    height: 46px;
    font-size: 13px;
    padding: 4px 0 0 0;
    background: none;
        :focus {
        outline: transparent;
        background: none;
        }
    }

    &:focus-within {
    border: 1px solid #4000c7;
    }
`;

const MakeCardModal = () => {
  const initialTags = [];
  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((el) => {
      return el !== tags[indexToRemove];
    }))
  };

  const addTags = (event) => {
    let value = event.target.value;
    if (event.key === 'Enter' && !tags.includes(value) && value) {
      setTags([...tags, value])
      event.target.value = '';
    }
  }
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const handleClose = () => {
    dispatch(closeMakeCardModal())
  };
  useOutSideClick(modalRef, handleClose);
  const [inputTitle, setInputTitle] = useState('');
  const [inputInfo, setInputInfo] = useState('');
  const [inputTag, setInputTag] = useState(tags);
  console.log(inputTag);
  const [message, setMessage] = useState(false);
  const buildCard = () => {
    if (inputTitle === '' || inputInfo === '' || inputTag === tags) {
      setMessage(true);
    } else {
      dispatch(closeMakeCardModal());
    }
  }

  return (
    <ModalPortal>
      <MakeCardModalContainer ref={modalRef}>
        <div className="blur">
          <div className="mainPageMakeCard">
            <input className="modal-title" onChange={(e) => { setInputTitle(e.target.value) }} placeholder="제목을 입력하세요"></input>
            <button type="button" className="close-btn" onClick={() => {
              dispatch(closeMakeCardModal())
            }}>X</button>
            <TagsInput >
              <ul id='tags' >
                {tags.map((tag, index) => (
                  <li key={index} className='tag' onChange={(e) => { setInputTag(e.target.value) }}>
                    <span className='tag-title' >{tag}</span>
                    <span className='tag-close-icon' onClick={() => removeTags(index)}>x
                    </span>
                  </li>
                ))}
              </ul>
              <input
                className='tag-input'
                type='text'
                onKeyUp={(event) => { addTags(event) }}
                placeholder='태그를 입력해 주세요'
              />
            </TagsInput>
            <button type="button" className="makeCard-btn" onClick={buildCard}>카드 만들기</button>
            {message ? <div className="failure-message">비어있는 부분이 있습니다.</div> : <div></div>}
            <img className="card-img" src="images/card-img.jpg" alt="card" />
            <textarea className="card-info-text" onChange={(e) => { setInputInfo(e.target.value) }} placeholder="설명을 입력하세요"></textarea>
          </div>
        </div>
      </MakeCardModalContainer>
    </ModalPortal>
  );
}

export default MakeCardModal;