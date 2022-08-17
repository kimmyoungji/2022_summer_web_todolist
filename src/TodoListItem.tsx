import React from 'react';
import styles from './styles/TodoListItem.module.css';
import checkedImg from './img/checked.png';
import unCheckedImg from './img/unChecked.png';

interface Props{
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo})=>{
    const changeImg = ()=>{
        if(todo.complete){

        }
    }
    const checkboxID = String(todo.text);
    return (
            <li className={styles.TodoListItem}>
                <label 
                    className={styles.txtLabel}
                    style={{textDecoration: todo.complete ? 'line-through':undefined}}>
                    <label htmlFor={checkboxID}>
                        <img className={styles.checkImg} src={todo.complete? checkedImg:unCheckedImg} alt="checked"
                        style={todo.complete?{}:{filter:'drop-shadow(0px 0px 3px rgb(199, 200, 211))'}}/>
                    </label>
                    <input
                        id={checkboxID}
                        className={styles.checkBox} 
                        type ='checkbox' 
                        checked={todo.complete} 
                        onClick={()=>{
                            toggleTodo(todo);
                            }}
                    />{" "}
                    <p className={styles.todoText}>{todo.text}</p>
                </label>    
            </li>
    );
};

