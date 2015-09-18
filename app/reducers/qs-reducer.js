import { SET_ACTIVE_QS } from 'actions/qs-actions';

const fakeQuestions = [{
  id: '1',
  type: 'string',
  title: 'Your name?',
  validator: 'notEmpty'
},{
  id: '2',
  type: 'numeric',
  title: 'Your age?',
  validator: 'notEmpty'
},{
  id: '3',
  type: 'date',
  title: 'Date of confirmation?',
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
