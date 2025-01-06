import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo, calculateRemainingTime}) {
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
                        calculateRemainingTime={calculateRemainingTime}
                    />
                ))
            ) : (
                <p>No tasks to display!</p>
            )}
        </div>
    );
}

export default TodoList;
