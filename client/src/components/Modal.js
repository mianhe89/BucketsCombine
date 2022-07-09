import { closeModal } from "./modals/ModalSlice";
import { useDispatch } from "react-redux";
import React from "react";

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <aisde className="modal-container">
            <div className="modal">
                <h4 className=" modal-title">카드 제목</h4>
                    <button type="button" className="btn-confirm-btn"
                    onClick={()=> {
                        dispatch(closeModal());
                    }}>
                        담기 및 참가
                    </button>
                    <button type="button" className="btn-cancel-btn"
                    onClick={()=>{
                        dispatch(closeModal());
                    }}>
                        X
                    </button>
                    <div className="card-img">사진</div>
                    <div className="card-info">설명</div>
                </div>
        </aisde>
    );
}

export default Modal