import { setIsNextable } from 'actions/answer-actions';

export function setAnswer(value, question) {
  return (dispatch, getState) => {
    console.log('question', question);
    dispatch(setIsNextable(value.length > 0));
  };
}
