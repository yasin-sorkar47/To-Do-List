import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState(" ");
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} onChange={changeHandler} />
      <button
        onClick={() => {
          if (text !== " ") {
            setText("");
            onAdd(text);
          }
        }}
      >
        Add
      </button>
    </>
  );
}
