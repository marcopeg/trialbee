
import { qsReducer } from 'reducers/qs-reducer';
import { answersReducer } from 'reducers/answers-reducer';
import { historyReducer } from 'reducers/history-reducer';

export const reducers = {
  qs: qsReducer,
  answers: answersReducer,
  history: historyReducer };
