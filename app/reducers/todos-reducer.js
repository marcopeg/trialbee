
import { REMOVE_TODO } from 'actions/todo-list';

export const defaultValue = {
    items: [],
    newValue: ''
};

export function todosReducer(state = defaultValue, action) {
    switch (action.type) {
        case REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}
