import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.tsx";
import AddTodo from "./components/AddTodo.tsx";

function App() {
    const [todos, setTodos] = useState([{id: "1", text: "todo1", completed: false}, {id: "2", text: "todo2", completed: false}]);
    const toggleCompleted = (id: string) => {
        setTodos(prev => prev.map((todo) => todo.id===id ? ({...todo, completed: !todo.completed}) : todo));
    }

    return (
        <>
            <AddTodo setTodos={setTodos}/>
            <TodoList todos={todos} toggleCompleted={toggleCompleted}/>
        </>
    )
}

export default App
