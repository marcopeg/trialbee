
import { PLAY, RESET } from 'actions/game';
import { CHOOSE_OPTION } from 'actions/options';

const initialState = {
    isPlaying: false,
    totalSteps: 0,
    currentStep: 0
};

export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case PLAY:
            return {...state, 
                isPlaying: true,
                totalSteps: action.totalSteps,
                currentStep: 0
            };
        case RESET:
            return {...initialState};
        case CHOOSE_OPTION:
            return {...state, 
                currentStep: state.currentStep + 1
            };
    }
    return state;
}
