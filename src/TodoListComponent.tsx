import TodoItem from "./TodoItem";
import items from "./Items.json";
import React, { Component } from "react";

export default class TodoList2 extends Component {
  state: any;
  constructor(props) {
    super(props);
    this.state = { checked: this.createInitialCheckedState(items) };
    console.log(this.state);
  }
  createInitialCheckedState = items => {
    const a = new Map();
    items.forEach(i => {
      a.set(i.key, i.checked);
    });
    return a;
  };

  render() {
    const changeTodoState = (key: number) => {
      const oldState = this.state.checked;
      const old = oldState.get(key);
      oldState.set(key, !old);
      this.setState({ checked: oldState });
    };

    return items.map(item => (
      <TodoItem
        key={item.key}
        text={item.text}
        handleChange={changeTodoState}
        id={item.key}
        checked={this.state.checked.get(item.key)}
      />
    ));
  }
}
