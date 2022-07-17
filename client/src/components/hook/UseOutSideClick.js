import { useEffect } from "react";
import { closeModal } from "../../redux/reducers/ModalReducer";

const useOutSideClick = (ref, callback) => {
    useEffect(() => {
        const handlClick = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                callback?.();
            }
        };
        window.addEventListener("mousedown", handlClick);
        return () => window.removeEventListener("mousedown", handlClick);
    }, [ref, callback]);
}

export default useOutSideClick;