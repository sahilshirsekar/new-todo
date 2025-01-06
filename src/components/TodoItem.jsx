import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo}) {
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
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Urgent">Urgent</option>
                <option value="Important">Important</option>
              </select>
              <input
              type='date'
              value={newDueDate}
              onChange={(e) => {setNewDueDate(e.target.value)}}
              ></input>
              <button style={{padding: "0px 0px 0px 80px"}} type='submit'>Save</button>

            </form>) : (
              <>
              <span onClick={() => toggleTodo(todo.id)}>
              {todo.isDone ? "✅" : "⬜"} {todo.todo}
          </span>
          <span className='badge bg-secondary '>{todo.label}</span>
          <span className="due-date text-right">{todo.dueDate ? `Due: ${todo.dueDate}` : ""}</span>
          <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          </>
            )
            }
        </div>
    );
}

export default TodoItem;
