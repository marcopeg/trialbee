
import { ADD_OPTION, REMOVE_OPTION, CHOOSE_OPTION } from 'actions/options';

const initialState = [];

export default function optionsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_OPTION:
            return [...state, {
                id: action.id,
                text: action.value,
                value: 100
            }];
        case REMOVE_OPTION:
            return state.filter(option => option.id != action.id);
        case CHOOSE_OPTION:
            return state.map(opt => {
                opt = {...opt};
                if (opt.id == action.opt1) {
                    opt.value += 10;
                }
                if (opt.id == action.opt2) {
                    opt.value -= 10;
                }
                return opt;
            });
    }
    return state;
}
