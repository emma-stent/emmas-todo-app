import TodoItem from "./TodoItem.tsx";
import type {Todo} from "../types.ts";

const TodoList = ({todos}: {todos: Todo[]}) => {
    return (<ul>{todos.map(todo => <TodoItem key ={todo.id} todo={todo}/>)}</ul>)
}

export default TodoList;