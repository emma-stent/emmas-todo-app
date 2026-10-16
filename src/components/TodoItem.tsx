import type {Todo} from "../types.ts";

const TodoItem= ({todo}: {todo: Todo}) => {
    return (
        <li>{todo.text}</li>
    )
}

export default TodoItem