
export default function AddTodoForm ( {addTodo} ) {

    return (
        <form className="add-todo-form" onSubmit={(e) => addTodo(e)}>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="description" placeholder="Description" />
            <button type="submit">Add</button>
        </form>
    )
}