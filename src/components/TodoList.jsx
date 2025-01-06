import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
    return (
        <div className="todo-list">
            {todos.length > 0 ? (
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))
            ) : (
                <p>No tasks to display!</p>
            )}
        </div>
    );
}

export default TodoList;
