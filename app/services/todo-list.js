
import { removeTodo as __removeTodo, dataIsReady } from 'actions/todo-list';

var JSON = {
    todos: [{
        id: 1,
        value: 'milk'
    },{
        id: 2,
        value: 'sugar'
    }]
}

export function removeTodo(id) {
    return (dispatch, getState) => {
        if (randomIntFromInterval(0, 100) > 50) {
            dispatch(__removeTodo(id));
        } else {
            alert('I dont think so');
        }
    };
}

export function loadInitialsTodos() {
    return (dispatch, getState) => {
        console.log("FOOO");

        setTimeout($=> {
            dispatch(dataIsReady(JSON.todos));
        }, 1000);

    };
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

