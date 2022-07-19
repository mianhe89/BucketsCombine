import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    isOpenCard: false,
    isOpenStamped: false,
    isOpenMakeCard: false,
    isOpenMyCard: false,
    isOpenMyStamped: false,
    isOpenChangePassword: false,
    isOpenConfirmPassword: false,
    isOpenWithdrawal: false,
    isOpenUserInfo: false,
    mode:"",
    cardsData: [],
    modalCardID: 0,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openCardModal: (state, action) => {
            state.isOpenCard = true;
        },
        openStampedModal: (state, action) => {
            state.isOpenStamped = true;
        },
        openMakeCardModal: (state, action) => {
            state.isOpenMakeCard = true;
        },
        openMyCardModal: (state, action) => {
            state.isOpenMyCard = true;
        },
        openMyStampedModal: (state, action) => {
            state.isOpenMyStamped = true;
        },
        openChangePasswordModal: (state, action) => {
            state.isOpenChangePassword = true;
        },
        openConfirmPasswordModal: (state, action) => {
            state.isOpenConfirmPassword = true;
        },
        openWithdrawalModal: (state, action) => {
            state.isOpenWithdrawal = true;
        },
        openUserInfoModal: (state, action) => {
            state.isOpenUserInfo = true;
        },
        closeMainPageCardModal: (state, action) => {
            state.isOpenCard = false;
        },
        closeMainStampedCardModal: (state, action) => {
            state.isOpenStamped = false;
        },
        closeMakeCardModal: (state, action) => {
            state.isOpenMakeCard = false;
        },
        closeMyCardModal: (state, action) => {
            state.isOpenMyCard = false;
        },
        closeMyStampedModal: (state, action) => {
            state.isOpenMyStamped = false;
        },
        closeChangePasswordModal: (state, action) => {
            state.isOpenChangePassword = false;
        },
        closeConfirmPasswordModal: (state, action) => {
            state.isOpenConfirmPassword = false;
        },
        closeWithdrawalModal: (state, action) => {
            state.isOpenWithdrawal = false;
        },
        closeUserInfoModal: (state, action) => {
            state.isOpenUserInfo = false;
        },
        setCardsData: (state, action) => {
            state.cardsData = action.payload;
        },
        setModalCardID: (state, action) => {
            state.modalCardID = action.payload;
        }
    }
});
export const { 
    openCardModal, 
    openStampedModal,
    openMakeCardModal,
    openMyCardModal,
    openMyStampedModal,
    openChangePasswordModal,
    openConfirmPasswordModal,
    openWithdrawalModal,
    openUserInfoModal,
    closeMainPageCardModal,
    closeMainStampedCardModal,
    closeMakeCardModal,
    closeMyCardModal,
    closeMyStampedModal,
    closeChangePasswordModal,
    closeConfirmPasswordModal,
    closeWithdrawalModal,
    closeUserInfoModal,
    setCardsData,
    setModalCardID
    } = modalSlice.actions;
export default modalSlice.reducer;