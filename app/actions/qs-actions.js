export const SET_ACTIVE_QS = '@qs@setActiveQs';

export function setActiveQs(index){
  return {
    type: SET_ACTIVE_QS,
    payload: index
  };
}
