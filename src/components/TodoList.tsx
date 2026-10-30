import TodoItem from "./TodoItem.tsx";
import type {TodoListProps} from "../types.ts";

const TodoList = ({visibleTodos, toggleCompleted, saveEditedTodo}: TodoListProps) => {
    return (
        <ul>
            {visibleTodos.map(todo => <TodoItem key ={todo.id} todo={todo} toggleCompleted={toggleCompleted} saveEditedTodo={saveEditedTodo}/>)}
        </ul>
    )
}

export default TodoList;