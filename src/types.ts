export type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

export type TodoListProps = {
    todos: Todo[];
    toggleCompleted: (id: string) => void;
}

export type TodoItemProps = {
    todo: Todo;
    toggleCompleted: (id: string) => void;
}