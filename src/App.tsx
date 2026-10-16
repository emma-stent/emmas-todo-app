import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.tsx";

function App() {
    const [todos, setTodos] = useState([{id: 1, text: "todo1", completed: false}]);
    return (
        <TodoList todos={todos} />
    )
}

export default App
