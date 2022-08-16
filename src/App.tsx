
import React, { useState } from 'react';
import { TodoList } from './TodoList';
import {TodoListItem} from './TodoListItem';
import {AddTodoForm} from './AddTodoForm';
import styles from './styles/Main.module.css';

// import logo from './logo.svg';
// import './App.css';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  // 언제 실행 되는지 명확하게 알아야 한다. $-->훅, class-->className
  // 훅이 무언가, 훅을 어떻게 만드는가
  // todo 앱 만들고 싶은 튜토리얼 보내기
  
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo:Todo)=>{
    const newTodos = todos.map((todo)=>{
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo:AddTodo = (text:string)=>{
    const newTodo = {text, complete:false};
    setTodos([...todos, newTodo]);
  }

  return (
    <div className={styles.root}>
      <div className={styles.todoListframe}>
        <AddTodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
    </div>
  );
}

export default App;
