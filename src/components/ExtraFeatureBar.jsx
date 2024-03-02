import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../redux/todoSlice";

export default function ExtraFeatureBar() {
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  const activeTodos = useSelector((state) => state.todo.activeTodo);

  useEffect(() => {
    setLength(activeTodos.length);
  }, [activeTodos, setLength]);

  return (
    <div
      className={`flex justify-between items-center p-3 ${
        length ? "" : "hidden"
      }`}
    >
      <p>{length} Items Left</p>
      <button
        onClick={() => {
          dispatch(clearCompleted());
        }}
      >
        Clear completed
      </button>
    </div>
  );
}
