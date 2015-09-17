import { setActiveQs } from 'actions/qs-actions';

export function startQs() {
  return (dispatch, getState) => {
    var state = getState().qs;
    if (state.activeQs === -1) {
      dispatch(setActiveQs(0));
    }
  };
}

export function nextQs() {
  return (dispatch, getState) => {
    var state = getState().qs;
    var activeQs = state.activeQs;
    if (activeQs > -1 && activeQs < state.qs.length) {
      dispatch(setActiveQs(activeQs + 1));
    }
  };
}

export function resetQs() {
  return (dispatch, getState) => {
    var state = getState().qs;
    if (state.activeQs === state.qs.length) {
      dispatch(setActiveQs(-1));
    }
  };
}
