
export const PLAY = '@@app@play';
export const RESET = '@@app@reset';

export function play(totalSteps) {
    return {
        type: PLAY,
        totalSteps
    };
}

export function reset() {
    return {
        type: RESET
    };
}

export function startGame() {
    return (dispatch, getState) => {
        var state = getState();
        dispatch(play(state.options.length));
    };
}