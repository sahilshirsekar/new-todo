import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo, calculateRemainingTime}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.todo);
  const [newLabel, setNewLabel] = useState(todo.label);
  const [newDueDate, setNewDueDate] =useState(todo.dueDate);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, newTask, newLabel, newDueDate);
    setIsEditing(false);
  }

    return (
        <div className={`todo-item ${todo.isDone ? "done" : ""}`}>
            {isEditing ? (
            <form
            onSubmit={handleEditSubmit}
             >
              <input 
                type="text" 
                value={newTask}
                onChange={(e) => {
                  setNewTask(e.target.value)
                }}
              />
              <select 
              value={newLabel}
              onChange={(e) => {
                setNewLabel(e.target.value)
              }}>
                <option  className='option' value="Work">Work</option>
                <option className='option' value="Personal">Personal</option>
                <option className='option' value="Urgent">Urgent</option>
                <option className='option' value="Important">Important</option>
              </select>
              <input
              type='date'
              value={newDueDate}
              onChange={(e) => {setNewDueDate(e.target.value)}}
              ></input>
              <button style={{margin: "0px 0px 0px 200px"}} type='submit'>Save</button>

            </form>) : (
              <>
              <span onClick={() => toggleTodo(todo.id)}>
              {todo.isDone ? "✅" : "⬜"} {todo.todo}
          </span>
          <span className='badge bg-secondary '>{todo.label}</span>
          <span className="due-date text-right">{todo.dueDate ? `Due: ${todo.dueDate}` : ""}</span>
          {todo.dueDate && (
            <span className="due-date text-right">
              Due in: {calculateRemainingTime(todo.dueDate)}
            </span>
          )}
          <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          </>
            )
            }
        </div>
    );
}

export default TodoItem;
