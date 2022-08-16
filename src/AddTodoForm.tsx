import React,{useState} from 'react';
import addBtnImg from './img/addBtn.png';
import styles from './styles/AddTodoForm.module.css';

interface Props{
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props>=({addTodo})=>{
    const [text, setText] = useState('');
    return (
        <form className={styles.AddTodoFormFrame}>
            <input
                className={styles.txtInput} 
                type="text" 
                value={text||' Add Item'} 
                onChange={(e)=>{
                    setText(e.target.value);
                }}
            />

            <button
                className={styles.addBtn} 
                type="submit" 
                onClick={(e)=>{
                    e.preventDefault();
                    addTodo(text);
                    setText(''); //text 비우기
                }}
            >
                <img
                    className={styles.addBtnImg}
                    src={addBtnImg}
                    alt='addBtnImg'
                />
            </button>
        </form>
    );
};