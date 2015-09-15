
export const REMOVE_TODO = 'removeTodo';

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: {
            id: id
        }
    };
}
