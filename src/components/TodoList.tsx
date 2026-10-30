import TodoItem from "./TodoItem.tsx";
import type {TodoListProps} from "../types.ts";

const TodoList = ({todos, toggleCompleted, saveEditedTodo}: TodoListProps) => {
    return (
        <ul>
            {todos.map(todo => <TodoItem key ={todo.id} todo={todo} toggleCompleted={toggleCompleted} saveEditedTodo={saveEditedTodo}/>)}
        </ul>
    )
}

export default TodoList;