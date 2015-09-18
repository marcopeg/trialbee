import { setAnswer } from 'actions/answers-actions';

export function validateAnswer(value, question) {
  return dispatch => {
    dispatch(setAnswer(value, question, value.length > 0));
  };
}
