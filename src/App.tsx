import React from "react";
import "./App.css";
import TodoList from "./TodoListFunction";
import TodoList2 from "./TodoListComponent";
import Example from "./Example";
import StateButton from "./StateButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
      <TodoList2 />
      <Example />
      <StateButton />
    </div>
  );
};

export default App;
