import React from 'react';
import { connect } from 'react-redux';

import { TodoItem } from 'components/todo-item';
import { TodoForm } from 'components/todo-form';

import { removeTodo, addTodo, loadTodos } from 'services/todo-list';
import { removeTodos, toggleTodoSelect } from 'actions/todo-list';

@connect(filterState)
export class TodoList extends React.Component {
    componentWillMount() {
      var { dispatch } = this.props;
      dispatch(loadTodos());
    };

    render() {
        console.log(this.props);

        var { dispatch } = this.props;

        var items = this.props.items
                    .map(transformItemsIntoProps(dispatch, this.props.selectedItems))
                    .map(transformPropsIntoComponent);

        return (
            <div className="container">
                <h3>{"Todo list"}</h3>
                <ul className="list-group">{items}</ul>
                <TodoForm
                  onRemove={todos => dispatch(removeTodos(todos))}
                  onAdd={value => dispatch(addTodo(value))}
                />
            </div>
        );
    };
}

export function filterState(state) {
    return state.todos;
}

export function transformItemsIntoProps(dispatch, selectedItems) {
    return item => {
        let isSelected = selectedItems.find(id => id == item.id) !== undefined;
        return {
            ...item,
            isSelected: isSelected,
            toggleItemSelection: (id, isSelected) => dispatch(toggleTodoSelect(id, isSelected))
        };
    };
}

export function transformPropsIntoComponent(item) {
    return <TodoItem {...item} key={item.id} />;
}
