
import { REMOVE_TODO, REMOVE_TODOS, ADD_TODO, ADD_TODOS, SELECT_TODO } from 'actions/todo-list';

const defaultValue = {
    items: []
};

export function todosReducer(state = defaultValue, action) {
    switch (action.type) {
        case REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        case ADD_TODO:
          return {
            ...state,
            items: state.items.concat([action.payload])
          };
        case ADD_TODOS:
          console.log('payload', action.payload);
          return {
            ...state,
            items: state.items.concat(action.payload)
          };
        case REMOVE_TODOS:
          // var removeIdsMap = {};
          // action.payload.map(item => removeIdsMap[item.id] = true);
          // return {
          //   ...state,
          //   items: state.items.filter(item => removeIdsMap[item.id] !== true)
          // };
          return {
            ...state,
            items: []
          }
        default:
            return state;
    }
}
