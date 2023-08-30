// Initial state
const initialState = {
  fullScreen: false,
  image: '',
};

// Reducer
export const fullScreenStateReducer = (state = initialState, action) => {
    if (action.type === "images/fullscreen") {
      return {
        ...state,
        fullScreen: action.fullScreen,
        image: action.image,
      };
    } else {
      return state
  }
};