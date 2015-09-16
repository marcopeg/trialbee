
export const REMOVE_TODO = 'removeTodo';
export const DATA_IS_READY = 'dataIsReady';

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: {
            id: id
        }
    };
}

export function dataIsReady(todos) {
    return {
        type: DATA_IS_READY,
        payload: todos
    }
}
