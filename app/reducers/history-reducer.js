import { ADD_ANSWERS } from 'actions/history-actions';

export function historyReducer(state = {}, action){
  switch(action.type){
    case ADD_ANSWERS:
      var newState = state;
      // console.log(action.payload.answers);
      // console.log(Date.now());
      newState[Date.now()] = action.payload.answers;
      return newState;
    default:
      return state;
  }
}
