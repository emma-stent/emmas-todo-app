import type {Todo} from "../types.ts";

const DeleteCompletedTodosButton = ({ todos, deleteCompletedTodos}: {todos: Todo[], deleteCompletedTodos:any} ) => {
    return (<button onClick={deleteCompletedTodos} disabled={!todos.some(todo => todo.completed)}>Delete Completed Tasks</button>)
}

export default DeleteCompletedTodosButton;