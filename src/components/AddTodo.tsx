import {useState} from "react";
import type {Todo} from "../types.ts";

const AddTodo = ({setTodos}:{setTodos:any}) => {
    const [todoText, setTodoText] = useState("");
    return (
        <form onSubmit={(e: React.SyntheticEvent)=> e.preventDefault()}>
            <input type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText}></input>
            <button type="submit" onClick = {() => setTodos((prev:Todo[]) => [...prev, {id: 1, text: todoText, completed: false}])}>Add todo</button>
        </form>
    )
}

export default AddTodo;