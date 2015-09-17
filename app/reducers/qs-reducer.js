import { SET_ACTIVE_QS } from 'actions/qs-actions';

const fakeQuestions = [{
  type: 'string',
  title: 'Your name?',
  validator: 'notEmpty'
},{
  type: 'string',
  title: 'Your age?',
  validator: 'notEmpty'
},{
  type: 'string',
  title: 'Your illness?',
  validator: 'notEmpty'
}];

export const initialState = {
  qs: fakeQuestions,
  activeQs: -1
}

export function qsReducer(state = initialState, action){
  switch(action.type){
    case SET_ACTIVE_QS:
      return {
        ...state,
        activeQs: action.payload
      }
    default:
      return state;
  }
}
