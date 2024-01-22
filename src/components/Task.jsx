import { useState } from "react";

export default function Task({ task, onDeleteTask, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);

  let textContext;
  if (isEditing) {
    textContext = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    textContext = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {textContext}
        <button onClick={() => onDeleteTask(task.id)}>Remove</button>
      </label>
    </li>
  );
}
