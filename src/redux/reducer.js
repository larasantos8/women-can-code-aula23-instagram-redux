import { createStore } from 'redux';

const initialState = {
  payload: {},
  profile: {},
  stories: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PUT_LIKES':
    return {
      ...state,
      payload: action.payload
    };
    case 'GET_USER':
    return {
      ...state,
      payload: action.payload
    };
    // case 'GET_POSTS':
    // return {
    //   payload: action.payload
    // };
    case 'GET_PROFILE':
    return {
      ...state,
      profile: action.payload
    };
    case 'GET_STORIES':
    return {
      ...state,
      stories: action.payload
    };               
    default:
    return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store