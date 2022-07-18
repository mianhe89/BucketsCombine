import { useState } from 'react';
import styled from 'styled-components';


export const TagsInput = styled.div`
  position: absolute;
  margin: 2px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 40vw;
  height: 5vh;
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
    :focus {
    outline: transparent;
    background: none;
  }
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }

`;

export const Tag = () => {
  const initialTags = [];

  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((el) => {
      return el !== tags[indexToRemove];
    }))
  };
  
  const addTags = (event) => {
    let value = event.target.value;
    if(event.key === 'Enter' && !tags.includes(value) && value){
      setTags([...tags, value])
      event.target.value = '';
    }
  }
  
  return (
    <>
      <TagsInput>
        <ul id='tags'>
          {tags.map((tag, index) => (
            <li key={index} className='tag'>
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon' onClick={() => removeTags(index)}>x
              </span>
            </li>
          ))}
        </ul>
        <input
          className='tag-input'
          type='text'
          onKeyUp={(event)=> {addTags(event)}}
          placeholder='Press enter to add tags'
        />
      </TagsInput>
    </>
  );
};