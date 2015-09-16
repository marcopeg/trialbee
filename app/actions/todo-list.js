
export const REMOVE_TODO = 'removeTodo';
export const REMOVE_TODOS = 'removeTodos';
export const ADD_TODO = 'addTodo';
export const ADD_TODOS = 'addTodos';
export const TOGGLE_TODO_SELECT = 'toggleTodoSelect'

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: {
            id: id
        }
    };
}

export function removeTodos(todos) {
    return {
        type: REMOVE_TODOS,
        payload: todos
    };
}


export function addTodo(id, value) {
    return {
        type: ADD_TODO,
        payload: {
            id: id,
            value: value
        }
    };
}

export function addTodos(todos) {
    return {
        type: ADD_TODOS,
        payload: todos
    };
}

export function toggleTodoSelect(id, isSelected) {
    return {
        type: TOGGLE_TODO_SELECT,
        payload: {
          id: id,
          isSelected: isSelected
        }
    };
}
