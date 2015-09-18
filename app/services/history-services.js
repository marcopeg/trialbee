import { addAnswers } from 'actions/history-actions';
import { clearAnswers } from 'actions/answers-actions';
import { setActiveQs } from 'actions/qs-actions';

export function saveAnswers() {
  return (dispatch, getState) => {

    dispatch(addAnswers(getState().answers));
    dispatch(clearAnswers());
    dispatch(setActiveQs(-1));
  }
}
