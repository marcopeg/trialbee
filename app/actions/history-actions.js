export const ADD_ANSWERS = '@history@addAnswers';

export function addAnswers(answers) {
  return {
    type: ADD_ANSWERS,
    payload: {
      answers: answers
    }
  };
}
