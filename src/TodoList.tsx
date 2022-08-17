import React from 'react';
import {TodoListItem} from './TodoListItem';
import styles from './styles/TodoList.module.css';

interface Props{
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo})=>{
    return(
        <div className={styles.root}>
            <ul className={styles.todoList}>
                {todos.map((todo)=>(
                    <TodoListItem todo={todo} toggleTodo={toggleTodo}/>
                ))}
            </ul>
        </div>
    );
};