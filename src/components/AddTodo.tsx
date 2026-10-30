import {useState} from "react";
import type {Todo} from "../types.ts";

const AddTodo = ({setTodos}:{setTodos: React.Dispatch<React.SetStateAction<{
        id: string
        text: string
        completed: boolean
    }[]>>}) => {
    const [todoText, setTodoText] = useState("");
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (todoText.trim() === "") {
            return;
        }
        setTodos((prev: Todo[]) => [...prev, {
            id: crypto.randomUUID(),
            text: todoText,
            completed: false
        }])
        setTodoText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText}></input>
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo;