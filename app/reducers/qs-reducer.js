import { SET_ACTIVE_QS } from 'actions/qs-actions';

export const initialState = {
  qs: [],
  activeQs: -1
}

export function qsReducer(state = initialState, action){
  switch(action.type){
    case SET_ACTIVE_QS:
      return { ...state,
        activeQs: action.payload 
      }
    default: 
      return state;
  }
}
