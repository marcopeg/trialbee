
import { TOGGLE } from 'actions/toggle-actions';

export const initialState = {
    visible: true
}

export function toggleReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE:
            return { ...state,
                visible: !state.visible
            };
        default:
            return state;
    }
}
