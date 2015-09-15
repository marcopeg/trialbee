import React from 'react';
import { connect } from 'react-redux';

import { TodoItem } from 'components/todo-item';
import { removeTodo } from 'services/todo-list';

@connect(filterState)
export class TodoList extends React.Component {
    render() {
        console.log(this.props);

        var { dispatch } = this.props;

        var items = this.props.items
                    .map(transformItemsIntoProps(dispatch))
                    .map(transformPropsIntoComponent);

        return (
            <div className="container">
                i am a todo list
                <ul className="list-group">{items}</ul>     
            </div>
        );
    }
}

export function filterState(state) {
    return state.todos;
}

export function transformItemsIntoProps(dispatch) {
    return item => {
        return {
            ...item,
            action: $=> dispatch(removeTodo(item.id))
        };
    };
}

export function transformPropsIntoComponent(item) {
    return <TodoItem {...item} key={item.id} />;
}
