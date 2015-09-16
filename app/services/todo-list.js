import uuid from 'uuid';

import { removeTodo as __removeTodo } from 'actions/todo-list';
import { addTodo as __addTodo } from 'actions/todo-list';
import { addTodos as __addTodos } from 'actions/todo-list';
import { getJson } from 'get-json'

export function removeTodo(id) {
    return (dispatch, getState) => {
        if (randomIntFromInterval(0, 100) > 50) {
            dispatch(__removeTodo(id));
        } else {
            alert('I dont think so');
        }
    };
}

export function addTodo(value) {
  return (dispatch, getState) => {
    dispatch(__addTodo(uuid.v4(), value));
  };
};

export function loadTodos() {
  return (dispatch, getState) => {
    // let todos = fetchTodos();

    getJson('todos.json', todos => {
      dispatch(__addTodos(todos));
    });
  };
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function fetchTodos() {
  return [{
      id: '1',
      value: 'Milk',
      stock: 4,
      unit: 'l'
   }, {
      id: '2',
      value: 'Sugar',
      stock: 1,
      unit: 'kg'
  }];
}
