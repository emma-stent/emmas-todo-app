import type { TodoItemProps } from "../types.ts";
import {useState} from "react";

const TodoItem= ({todo, toggleCompleted, saveEditedTodo}: TodoItemProps) => {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [newTodoText, setNewTodoText] = useState(todo.text);
    return (
        <>
            {isBeingEdited
                ? (
                    <>
                        <input type="text" onChange={(e) => setNewTodoText(e.target.value)} value={newTodoText}></input>
                        <button onClick={()=> {
                            setIsBeingEdited(false)
                            saveEditedTodo(todo.id, newTodoText)
                        }}>Save</button>
                    </>)
                : (
                    <>
                        <li style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</li>
                        {!todo.completed &&
                            <button onClick={() => setIsBeingEdited(true)}>Edit task</button>
                        }
                    </>)
            }
            <input type={"checkbox"} checked={todo.completed} onChange={()=>toggleCompleted(todo.id)}></input>
        </>
    )
}

export default TodoItem