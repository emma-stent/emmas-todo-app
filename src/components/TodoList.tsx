import TodoItem from "./TodoItem.tsx";
import type {TodoListProps} from "../types.ts";

const TodoList = ({todos, toggleCompleted}: TodoListProps) => {
    return (<ul>{todos.map(todo => <TodoItem key ={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>)}</ul>)
}

export default TodoList;