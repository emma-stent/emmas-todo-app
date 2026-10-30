import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.tsx";
import AddTodo from "./components/AddTodo.tsx";
import DeleteCompletedTodosButton from "./components/DeleteCompletedTodosButton.tsx";
import type {FilterOptions, Todo} from "./types.ts";
import FilterTasksButtons from "./components/FilterTasksButtons.tsx";

function App() {
    const [todos, setTodos] = useState(
        [
            {id: "1", text: "I can read a list of tasks", completed: false},
            {id: "2", text: "I can add a task to the list", completed: false},
            {id: "3", text: "I can mark any task as completed", completed: false},
            {id: "4", text: "I can delete completed tasks", completed: false},
            {id: "5", text: "I can edit uncompleted tasks", completed: false},
            {id: "6", text: "I can view a subset of tasks", completed: false}
        ],
    );
    const [filterChoice, setFilterChoice] = useState<FilterOptions>("All");

    const toggleCompleted = (id: string) => {
        setTodos(prev => prev.map((todo) => todo.id===id ? ({...todo, completed: !todo.completed}) : todo));
    }

    const saveEditedTodo = (id: string, newText: string) => {
        setTodos(prev => prev.map((todo) => todo.id===id ? ({...todo, text: newText}) : todo));
    }

    const deleteCompletedTodos = () => {
        setTodos(prev => prev.filter((todo) => !todo.completed))
    }

    const filterVisibleTodos = (todos: Todo[]) => {
        switch(filterChoice) {
            case "Uncompleted":
                return todos.filter((todo) => !todo.completed);
            case "Completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }

    return (
        <>
            <AddTodo setTodos={setTodos}/>
            <FilterTasksButtons filterChoice={filterChoice} setFilterChoice={setFilterChoice}/>
            <TodoList visibleTodos={filterVisibleTodos(todos)} toggleCompleted={toggleCompleted} saveEditedTodo={saveEditedTodo}/>
            <DeleteCompletedTodosButton todos={todos} deleteCompletedTodos={deleteCompletedTodos} />
        </>
    )
}

export default App
