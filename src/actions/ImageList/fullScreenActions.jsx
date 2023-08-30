import { fullScreenStateAction } from "../actionTypes/actionTypes";

// open modal
export const openFullScreen = (image, dispatch, fullScreenState) => {
    !fullScreenState.fullScreen && dispatch(fullScreenStateAction(true, image));
}

// close modal
export const closeFullScreen = (e, dispatch, fullScreenState) => {
    const modal = e.target.closest('.modal');
    modal.classList.remove('open');
    setTimeout(function(){
        fullScreenState.fullScreen && dispatch(fullScreenStateAction(false, ''));
    }, 500);
}

// init modal
export const initFullScreen = (e) => {
    const modal = e.target.closest('.modal');
    modal.classList.add('open');
}