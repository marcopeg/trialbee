
import { removeTodo as __removeTodo } from 'actions/todo-list';

export function removeTodo(id) {
    return (dispatch, getState) => {
        if (randomIntFromInterval(0, 100) > 50) {
            dispatch(__removeTodo(id));
        } else {
            alert('I dont think so');
        }
    };
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

