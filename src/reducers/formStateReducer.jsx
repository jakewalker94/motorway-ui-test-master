const initialState = {
  submitState: ''
};

// Reducer
export const formStateReducer = (state = initialState, action) => {
    if (action.type === 'forms/exampleForm') {
      return {
        ...state,
        submitState: action.submitState,
      };
    } else {
      return state
  }
};