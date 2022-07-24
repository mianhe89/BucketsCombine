import { closeMyCardModal, setUsersData, setStampedData, openUserInfoModal, setBucketData } from "../../redux/reducers/ModalReducer.js";
import { useSelector, useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import useOutSideClick from "../hook/UseOutSideClick.js";
import styled from 'styled-components';
import ModalPortal from "./ModalPortal.js";
import HorizontalScroll from 'react-scroll-horizontal';
import { useMediaQuery } from "react-responsive";


const MainPageModal = styled.div`
    .modal-container {
        width: 70vw;
        max-width: 1200px;
        height: 60vh;
        min-height: 460px;
        max-height: 700px;
        display: flex;
        border-radius: 20px ;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        margin-left: 60px;
        z-index: 10;
        border: solid #5E5E5E;
        border-width: 1px;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        animation: fadein 0.3s;
        -moz-animation: fadein 0.3s;
        -webkit-animation: fadein 0.3s;
        -o-animation: fadein 0.3s;
        box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.2);

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

    .mainPageCard {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .card-img {
        margin-right: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        border: none;
        width: 260px;
        height: 390px;
        background-size: cover;
    }

    .modal-title {
        position: absolute;
        width: calc(100% - 370px);
        font-size: 28px;
        font-weight: 1000;
        top: 60px;
        left: 60px;
        margin: auto;
    }

    .card-tag  {
        position: absolute;
        width: calc(100% - 370px);
        left: 60px;
        top: 120px;
        font-size: 18px;
    }

    .userinfo {
        display: flex;
        flex-direction: row;
        position: absolute;
        height: 40px;
        width: calc(100% - 370px);
        left: 60px;
        top: 160px;
        font-size: 18px;
        overflow: auto;
        white-space: nowrap;
        ::-webkit-scrollbar {
        display: none;
        }
        
    }

    .userinfo-message {
        display: flex;
        flex-direction: row;
        position: absolute;
        height: 40px;
        width: calc(100% - 370px);
        left: 60px;
        top: 180px;
        color: grey;
        font-size: 14px;
        overflow: auto;
        white-space: nowrap;
        ::-webkit-scrollbar {
        display: none;
        }
        
    }

    .card-description {
        position: absolute;
        width: calc(100% - 370px);
        font-size: 16px;
        top: 240px;
        left: 60px;
    };

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

    .userInfo-btn {
        position: absolute;
        justify-content: center;
        background: none;
        border: none;
        width: 10vw;
        left: 1vw;
        top: 17vh;
    }
    
    .btn-confirm-btn {
        align-self: flex-end;
        margin-right: auto;
        background-color: #FFC700;
        border-radius: 10px;
        border: none;
        width: 120px;
        height: 30px;
        position: relative;
        left: 30px;
        bottom: 30px;
        font-size: 14px;
    }

    .username {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 15px;
    }

    .profile-image {
        background-color: #CCCCCC;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-left: 4px;
        margin-right: 14px;
    }

    .modal-container-mobile {
        width: 90vw;
        max-width: 1200px;
        height: 60vh;
        min-height: 460px;
        max-height: 700px;
        display: flex;
        border-radius: 20px ;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 10;
        border: solid #5E5E5E;
        border-width: 1px;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        animation: fadein 0.3s;
        -moz-animation: fadein 0.3s;
        -webkit-animation: fadein 0.3s;
        -o-animation: fadein 0.3s;
        box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.2);
    }

    .card-img-mobile {
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        border: none;
        width: 0px;
        height: 0px;
        background-size: cover;
    }

    .modal-title-mobile {
        position: absolute;
        width: calc(100% - 70px);
        font-size: 28px;
        font-weight: 1000;
        top: 60px;
        left: 30px;
        margin: auto;
    }

    .card-tag-mobile  {
        position: absolute;
        width: calc(100% - 70px);
        left: 30px;
        top: 120px;
        font-size: 18px;
    }

    .userinfo-mobile {
        display: flex;
        flex-direction: row;
        position: absolute;
        height: 40px;
        width: calc(100% - 70px);
        left: 30px;
        top: 160px;
        font-size: 18px;
        overflow: auto;
        white-space: nowrap;
        ::-webkit-scrollbar {
        display: none;
        }
    }

    .card-description-mobile {
        position: absolute;
        width: calc(100% - 70px);
        font-size: 16px;
        top: 240px;
        left: 30px;
    };

    .userinfo-message-mobile {
        display: flex;
        flex-direction: row;
        position: absolute;
        height: 40px;
        width: calc(100% - 70px);
        left: 30px;
        top: 180px;
        color: grey;
        font-size: 14px;
        overflow: auto;
        white-space: nowrap;
        ::-webkit-scrollbar {
        display: none;
        }
    }

    .state-select{
        position: absolute;
        right: 10vw;
        top: 3vh;
        width: 8vw;
        
    }

    .ColumnCard-progress-0 {
    background-color: #8A8A8A;
    height: 80px;
    width: 10px;
    border-radius: 10px;
    position: absolute;
    top:20px;
    left: 10px;
  }

  .ColumnCard-progress-1 {
    background-color: #FFC700;
    height: 80px;
    width: 10px;
    border-radius: 10px;
    margin: 5px;
  }

  .ColumnCard-progress-2 {
    background-color: #FF5C00;
    height: 80px;
    width: 10px;
    border-radius: 10px;
    margin: 5px;
  }

  .username-board{
    top: 10px;
    right: 70px;
    position: absolute;
    width: 100px;
    height: 130px;
    border-radius: 12px;
    z-index: 16;
    background-color: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 50;
  }

  .state-fix{
    position: absolute;
    right: 70px;
    top: 10px;
    width: 100px;
    height: 20px;
    background-color: none;
    border-radius: 5px;
  }

  .stand{
      background-color: #7A7A7A;
      border-radius: 9px;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #F4FFFF;
      width: 100px;
      height: 20px;
      display: fixed;
      cursor: pointer;
  }

  .progress{
      background-color: #FFC700;
      border-radius: 9px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100px;
      color: #F4FFFF;
      width: 100px;
      height: 20px;
      display: fixed;
      cursor: pointer;
  }

  .acheivement{
    background-color: #FF5C00;
    border-radius: 9px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: fixed;
    width: 100px;
    color: #F4FFFF;
    height: 20px;
    cursor: pointer;
  }

  .arrow-down span {
    position: relative;
    z-index: 15;
    
}

.arrow-down span::after {
    content: '';
    width: 5px; /* 사이즈 */
    height: 5px; /* 사이즈 */
    border-top: 2px solid #121212; /* 선 두께 */
    border-right: 2px solid #121212; /* 선 두께 */
    display: flex;
    transform: rotate(135deg); /* 각도 */
    position: absolute;
    top: 7px; /* 기본 0px 값으로 해주세요 */
    left: 30px; /* 기본 0px 값으로 해주세요 */
}
  
  .board-button-0 {
    position: relative;
    border: none;
    box-shadow: none;
    width: 90px;
    height: 20px;
    border-radius: 8px;
    font-size: 15px;
    color: white;
    background-color: #7A7A7A;
    margin: 5px;
    cursor: pointer;
  }
  .board-button-1 {
      position: inherit;
    border: none;
    box-shadow: none;
    width: 90px;
    height: 20px;
    border-radius: 8px;
    font-size: 15px;
    color: white;
    background-color: #FFC700;
    margin: 5px;
    cursor: pointer;
  }
  .board-button-2 {
      position: inherit;
    border: none;
    box-shadow: none;
    width: 90px;
    height: 20px;
    border-radius: 8px;
    font-size: 15px;
    color: white;
    background-color: #FF5C00;
    margin: 5px 5px 5px 5px;
    cursor: pointer;
    }
    .button-container{
        position: relative;
        border: solid 2px black;
        border-radius: 10px;
        margin: 5px;
        width: 100px;
        height: 90px;
        margin: 5px;
        
    }`    
    


const MyCardModal = ({
    }) => {
    const isDesktop = useMediaQuery({ minWidth: 921 })
    const isTablet = useMediaQuery({ minWidth: 1201 })
    const [ isCompleted, setIsCompleted ] = useState('');
    const [ isBoardOpen, setIsBoardOpen ] = useState(true);
    const [ isMyCard, setIsMyCard ] = useState(false);
    const [ isLogin , setIsLogin ] = useState(false);

    const modalCardID = useSelector((state) => state.modal.modalCardID);
    const cardsData = useSelector((state) => state.modal.bucketData);
    const {usersData} = useSelector((state) => state.modal.usersData);

    const cardData = cardsData.filter(card => card.id === modalCardID);
    const title = cardData[0].title;
    const completed = cardData[0].completed
    const cardtext = cardData[0].cardtext;

    
    const userState = () => {
        setIsMyCard(true);
    }
    const selectBoxClick = () => {
        setIsBoardOpen(!isBoardOpen)
    }
    const completeStateCard = () => {
        setIsCompleted(cardData[0].completed);
    }
    let backgroundImageStyle = {
        backgroundImage: "url(/images/card-" + cardData[0].background + ".jpg)",
    };
    const tags = cardData[0].tag;

    const tagLine = tags.map((tag) => {
        return `#${tag}`;
    });

    const changeStand = () => {
        setIsCompleted('0');
    }
    const changeProgress= () => {
        setIsCompleted('1');
    }
    const changeAcheivement = () => {
        setIsCompleted('2');
    }
    
    const membersID = cardData[0].membersID;

    const dispatch = useDispatch();
    const modalRef = useRef(null);
    const handleClose = () => {
        dispatch(closeMyCardModal())
    };
    useOutSideClick(modalRef, handleClose);

    // const isDesktop = useMediaQuery({minWidth: 921})
    // const [isBoardOpen, setIsBoardOpen] = useState(false)

    // const signinClick = () => {
    //     setIsSignIn(true)
    // }

    // const usernameclick = () => {
    //     setIsBoardOpen(!isBoardOpen)
    // }

  return (
    <ModalPortal>
      <MainPageModal ref={modalRef}>
        <div className={isDesktop ? "modal-container" : "modal-container-mobile"} >
          <div className="mainPageCard" >
            
            <h4 className={isTablet ? " modal-title" : " modal-title-mobile"}>{title}</h4>
            <div className={isTablet ? "card-tag" : "card-tag-mobile"}>{tagLine.join(" ")}</div>
            <div className={isTablet ? "userinfo" : "userinfo-mobile"}>
              {membersID.map((member, i) => {
                const username = usersData[member - 1].username;
                const userphoto = usersData[member - 1].userphotourl;
                return <div key={i} className="username" onClick={() => {
                    dispatch(openUserInfoModal())
                    dispatch(closeMyCardModal())}}>{username}<img className="profile-image" src={userphoto} /></div>
              })}
            </div>
            <button className="close-btn" onClick={() => {
              dispatch(closeMyCardModal())
            }}>X</button>
            <button type="button" className="btn-confirm-btn">
              카드 빼기
            </button>
            { isMyCard ?
                <div className='state-fix'>
                {completed === '0'? <div className='stand'>대기중</div> 
                : completed === '1'? <div className='progress'>진행중</div> 
                : completed === '2'?<div className='acheivement'>달성</div>
                :<div/>}</div>
            : <div>
                <div className='username-board' onClick={selectBoxClick} onChange={completeStateCard}>
                    <div className="arrow-down"><span></span></div>
                    {isCompleted === '0'? <div className='stand'>대기중</div> 
                    :  isCompleted === '1' ? <div className='progress'>진행중</div> 
                    : <div className='acheivement'>달성</div>}
                    <div>
                        {isBoardOpen ?<div className="button-container" >
                                <button className='board-button-0' onClick={changeStand}>대기중 </button>
                                <button className='board-button-1' onClick={changeProgress}>진행중 </button>
                                <button className='board-button-2' onClick={changeAcheivement}>달성 </button>
                            </div>
                        :<div/>}
                    </div>
                </div>
              </div>
            }
            <div className={isTablet ? "card-img" : "card-img-mobile"} style={backgroundImageStyle} />
            <div className={isTablet ? "card-description" : "card-description-mobile"}>{cardtext}</div>
          </div>
        </div>
      </MainPageModal>
    </ModalPortal>
  );
}

export default MyCardModal;