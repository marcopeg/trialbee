
import { REMOVE_TODO, REMOVE_TODOS, ADD_TODO, ADD_TODOS, SELECT_TODO, TOGGLE_TODO_SELECT } from 'actions/todo-list';

const defaultValue = {
    items: [],
    selectedItems: ['1', '2', '3']
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
        case TOGGLE_TODO_SELECT:
          return {
            ...state,
            selectedItems: setSelectedItems(state.selectedItems, action.payload.id, action.payload.isSelected)
          };
        default:
            return state;
    }
}

function setSelectedItems(selectedIds, id, isSelected) {
  if (isSelected) {
    return [...selectedIds, id];
  } else {
    var index = selectedIds.indexOf(id);
    selectedIds.splice(0, index);
    return selectedIds;
  }
}
