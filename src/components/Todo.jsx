
import { useState } from "react"

export default function Todo( {todo, removeTodo} ) {

    let [completed, setCompleted] = useState(todo.completed)

    return (
        <li  onDoubleClick={() => setCompleted(!completed)}>
            <div>
                <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} />
                <strong className={completed ? 'completed' : null}>{todo.title}</strong>
                <button onClick={(e)=> removeTodo(e)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
            {!completed && (
                <p>{todo.description}</p>
            )}
        </li>
    )
} 