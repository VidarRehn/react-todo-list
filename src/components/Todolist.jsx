import Todo from "./Todo"

export default function Todolist ( {todos, removeTodo} ) {

    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (<Todo key={index} todo = {todo} removeTodo = {removeTodo} />))}
        </ul>
    )
}