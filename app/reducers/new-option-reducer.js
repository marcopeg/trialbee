
import { UPDATE_VALUE, RESET_VALUE } from 'actions/options';

const initialState = {
    value: ''
};

export default function newOptionReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_VALUE:
            return {...state, value: action.value};
        case RESET_VALUE:
            return {...state, value: ''};
    }
    return state;
}
