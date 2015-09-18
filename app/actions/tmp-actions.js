export const SET_IS_NEXTABLE = 'setIsNextable';

export function setIsNextable(isNextable) {
  return {
    type: SET_IS_NEXTABLE,
    payload: {
      isNextable: isNextable
    }
  };
}
