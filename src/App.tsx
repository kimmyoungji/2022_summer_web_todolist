
import React, { useState } from 'react';
import {TodoListItem} from './TodoListItem';

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

  const toggleTodo = (selectedTodo:Todo)=>{
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
  }
  
  return (
    <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    </ul>
  );
}

export default App;
