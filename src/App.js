import TodoList from "./Todolist"
import { useState , useRef } from "react";
import {v4 as uuidv4} from "uuid";
function App() {
  const [todos,setTodos]=useState([]);

  const todoNameRef = useRef();

  const toggleTodo = (id)=>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=>todo.id===id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleAddTodo = () =>{
    //task
    console.log(todoNameRef.current.value)
    const name = todoNameRef.current.value;
    if(name ==="") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(), name :name, completed:false}];
    });
    todoNameRef.current.value = null ;
  
  }


  const handleClear = () =>{
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }
  return (
    <div className="App">
       <TodoList todos={todos} toggleTodo={toggleTodo}/>
       <input type ="text" ref={todoNameRef}/>
       <button onClick={handleAddTodo}>タスクを追加</button>
       <button onClick={handleClear}>完了したタスクの解除</button>
       <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
