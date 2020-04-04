const initialState = {
    count: 0,
    user: {}
  };
  

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LIKE':
        return {
          count: state.count + 1
        };
  
      case 'GET_USER':
        return {
         payload: action.payload
        };          
      default:
        return state;
    }
  }

