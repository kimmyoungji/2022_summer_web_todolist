interface Todo{
    text: String; 
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text:string)=>void;