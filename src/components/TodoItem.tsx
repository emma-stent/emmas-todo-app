import type { TodoItemProps } from "../types.ts";
import {useState} from "react";

const TodoItem= ({todo, toggleCompleted, saveEditedTodo}: TodoItemProps) => {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [newTodoText, setNewTodoText] = useState(todo.text);
    const handleClick = () => {
        if (newTodoText.trim() === "") {
            return;
        }
        setIsBeingEdited(false)
        saveEditedTodo(todo.id, newTodoText)
    }
    return (
        <li>
            {isBeingEdited
                ? (
                    <>
                        <input type="text" onChange={(e) => setNewTodoText(e.target.value)} value={newTodoText}></input>
                        <button onClick={handleClick} disabled={newTodoText.trim() === ""}>Save</button>
                    </>)
                : (
                    <>
                        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
                        {!todo.completed &&
                            <button onClick={() => setIsBeingEdited(true)}>Edit task</button>
                        }
                    </>)
            }
            <input type={"checkbox"} checked={todo.completed} onChange={()=>toggleCompleted(todo.id)}></input>
        </li>
    )
}

export default TodoItem