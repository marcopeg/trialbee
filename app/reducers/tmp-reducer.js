import { SET_IS_NEXTABLE } from 'actions/tmp-actions';

export const initialState = {
  isNextable: false
}

export function tmpReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_NEXTABLE:
        return { ...state,
          isNextable: action.payload.isNextable
        };
      break;
    default:
      return state;
  }
}
