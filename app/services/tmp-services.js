import { setIsNextable } from 'actions/tmp-actions';

export function validateNextable(value, question) {
  return (dispatch, getState) => {
    console.log('question', question);
    dispatch(setIsNextable(value.length > 0));
  };
}
