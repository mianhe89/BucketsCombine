import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    transition: .4s;
  }
  > .toggle--checked{
    transition: .4s;
    background-color: black;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: .4s;
  }
  > .toggle--checked{
    transition: .4s;
    left: 27px;
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? 'toggle--checked': ""}`}/>
        <div className={`toggle-circle ${isOn ? 'toggle--checked': ""}`}/>
      </ToggleContainer>
      <Desc>{isOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</Desc>
    </>
  );
};