import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <button className="edit-icon"  onClick={() => editTodo(task.id)} >edit</button>
        <button className="delete-icon"  onClick={() => deleteTodo(task.id)} >update</button>
        
    </div>
    </div>
  )
}
