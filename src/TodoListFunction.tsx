import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import items from "./Items.json";

// type Props = {
//   items: any;
// };

const TodoList: any = () => {
  // !!!in order for state to be updated, a new object reference must be passed to the update function!!!
  const [checked, setChecked] = useState(createInitialCheckedState(items));
  const [counter, setCounter] = useState(new Map([["counter", 0]]));
  const [counter2, setCounter2] = useState({ counter: { counter: 0 } });
  const [counter3, setCounter3] = useState({ counter: 0 });

  useEffect(() => {
    console.log("effect called");
  }, [counter2.counter.counter]);

  const changeTodoState = (key: number) => {
    console.log("old checked", checked);
    const old = checked.get(key);
    checked.set(key, !old);
    setChecked(checked);
    // var a = new Map(checked);
    // setChecked(a);

    // items.forEach(item => {
    //   item.checked = checked.get(item.key);
    // });
    console.log("checked", checked);
  };

  const changeCounter = () => {
    const oldState = counter;
    const old = counter.get("counter") | 0;
    counter.set("counter", old + 1);
    // setCounter(new Map(oldState));
    setCounter(counter);
    console.log("hello counter ", oldState);
  };

  const changeCounter2 = () => {
    counter2.counter.counter = counter2.counter.counter + 1;
    setCounter2(counter2);
    // setCounter2({ counter: { counter: counter2.counter.counter } });
    console.log("hello counter2 ", counter2);
  };

  const changeCounter3 = () => {
    counter3.counter = counter3.counter + 1;
    setCounter3({ counter: counter3.counter });
    console.log("hello counter3 ", counter3);
  };

  return items.map((item, i) => (
    <div key={i}>
      <TodoItem
        key={item.key}
        text={item.text}
        handleChange={changeTodoState}
        id={item.key}
        checked={checked.get(item.key)}
      />

      <button onClick={changeCounter}>{counter.get("counter")}</button>
      <button onClick={changeCounter2}>{counter2.counter.counter}</button>
      <button onClick={changeCounter3}>{counter3.counter}</button>
    </div>
  ));
};

const createInitialCheckedState = items => {
  const a = new Map();
  items.forEach(i => {
    a.set(i.key, i.checked);
  });
  return a;
};

export default TodoList;
