import type { TodoItemProps } from "../types.ts";

const TodoItem= ({todo, toggleCompleted}: TodoItemProps) => {
    return (
        <>
            <li style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</li>
            <input type={"checkbox"} checked={todo.completed} onChange={()=>toggleCompleted(todo.id)}></input>
        </>
    )
}

export default TodoItem