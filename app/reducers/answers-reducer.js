import { SET_ANSWER, CLEAR_ANSWERS } from 'actions/answers-actions';

export function answersReducer(state = {}, action) {
  switch (action.type) {
    case SET_ANSWER:
      var newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case CLEAR_ANSWERS:
      return {};
    default:
      return state;
  }
}
