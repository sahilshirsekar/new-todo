import React, { useState } from 'react';

function AddTodo({ addTodo }) {
    const [task, setTask] = useState("");
    const [label, setLabel] = useState("Work");
    const [dueDate, setDueDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        addTodo(task, label, dueDate);
        setTask("");
        setDueDate("")
    };
    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <select
              value={label}
              onChange={e => {
                setLabel(e.target.value)
              }}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Urgent">Urgent</option>
              <option value="Important">Important</option>
            </select>
            <input
            type='date'
            value={dueDate}
            onChange={e => {
              setDueDate(e.target.value)
            }}
            >
            </input>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;
