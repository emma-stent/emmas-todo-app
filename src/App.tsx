import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.tsx";
import AddTodo from "./components/AddTodo.tsx";
import DeleteCompletedTodosButton from "./components/DeleteCompletedTodosButton.tsx";

function App() {
    const [todos, setTodos] = useState([{id: "1", text: "todo1", completed: false}, {id: "2", text: "todo2", completed: false}]);
    const toggleCompleted = (id: string) => {
        setTodos(prev => prev.map((todo) => todo.id===id ? ({...todo, completed: !todo.completed}) : todo));
    }

    const saveEditedTodo = (id: string, newText: string) => {
        setTodos(prev => prev.map((todo) => todo.id===id ? ({...todo, text: newText}) : todo));
    }

    const deleteCompletedTodos = () => {
        setTodos(prev => prev.filter((todo) => !todo.completed))
    }

    return (
        <>
            <AddTodo setTodos={setTodos}/>
            <TodoList todos={todos} toggleCompleted={toggleCompleted} saveEditedTodo={saveEditedTodo}/>
            <DeleteCompletedTodosButton todos={todos} deleteCompletedTodos={deleteCompletedTodos} />
        </>
    )
}

export default App
