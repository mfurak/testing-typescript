import React from "react";

type Props = {
  text: string;
  checked?: boolean;
  handleChange: any;
  id: number;
};

const TodoItem = (props: Props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={() => props.handleChange(props.id)}
        />
        {props.text}
      </label>
    </div>
  );
};
export default TodoItem;
