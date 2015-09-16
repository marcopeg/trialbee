
import { REMOVE_TODO, DATA_IS_READY } from 'actions/todo-list';

export const defaultValue = {
    items: [],
    dataIsReady: false
};

export function todosReducer(state = defaultValue, action) {
    switch (action.type) {
        case REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        case DATA_IS_READY:
            return {
                ...state,
                dataIsReady: true,
                items: [...state.items].concat(action.payload)
            };
        default:
            return state;
    }
}
