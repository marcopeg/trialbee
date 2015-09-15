
import { REMOVE_TODO } from 'actions/todo-list';

const defaultValue = {
    items: [{
        id: '32few',
        value: 'milk'
    },{
        id: 'dewdew',
        value: 'sugar'
    }],
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
