import React from 'react';
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    

    

   

    const [todoItems,setTodoItems]=useState([])
    
   const handleNewItems = (itemName,itemDueDate)=>{
    
    setTodoItems((currValue) => [
        ...currValue,{name:itemName,dueDate:itemDueDate}
      ]
  )  
    
    
   };

   const handleDeletItem = (todoItemName) => {
    const newTodoItemss =todoItems.filter((item)=>item.name !== todoItemName);
    setTodoItems(newTodoItemss)
   }
    
    return (
        <div className="todo-container">
            <AppName />
            <AddTodo onNewItem={handleNewItems} />
          <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
           
            <TodoItems todoItems={todoItems}  onDeletClick={handleDeletItem}/>
        </div>
    );
}

export default App;
