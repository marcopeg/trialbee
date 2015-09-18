export const SET_ANSWER = 'setAnswer';
export const CLEAR_ANSWERS = 'clearAnswers';

export function setAnswer(value, question, isValid) {
  return {
    type: SET_ANSWER,
    payload: {
      id: question.id,
      value: value,
      isValid: isValid
    }
  };
}

export function clearAnswers() {
  return {
    type: CLEAR_ANSWERS,
    payload: []
  };
}
