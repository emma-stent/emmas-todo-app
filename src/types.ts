export type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

export type FilterOptions = "All" | "Uncompleted" | "Completed";

export type TodoListProps = {
    visibleTodos: Todo[];
    toggleCompleted: (id: string) => void;
    saveEditedTodo: (id: string, newText: string) => void;
}

export type TodoItemProps = {
    todo: Todo;
    toggleCompleted: (id: string) => void;
    saveEditedTodo: (id: string, newText: string) => void;
}