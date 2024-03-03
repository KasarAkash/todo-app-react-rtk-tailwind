import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addActiveTodos,
  addCompletedTodos,
  clearCompleted,
} from "../redux/todoSlice";
import { selectActive, selectAll, selectComplete } from "../redux/filterSlice";

export default function ExtraFeatureBar() {
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  const filerState = useSelector((state) => state.filter);
  const activeTodo = useSelector((state) => state.todo.activeTodo);

  useEffect(() => {
    setLength(activeTodo.length);
  }, [filerState, activeTodo, length]);

  return (
    <div className={`flex justify-between items-center p-3`}>
      <p>{length} Items Left</p>

      <div className="hidden gap-4 sm:flex">
        <button
          className={filerState.all ? "text-BrightBlue" : ""}
          onClick={() => {
            dispatch(selectAll());
          }}
        >
          All
        </button>
        <button
          className={filerState.active ? "text-BrightBlue" : ""}
          onClick={() => {
            dispatch(addActiveTodos());
            dispatch(selectActive());
          }}
        >
          Active
        </button>
        <button
          className={filerState.completed ? "text-BrightBlue" : ""}
          onClick={() => {
            dispatch(addCompletedTodos());
            dispatch(selectComplete());
          }}
        >
          Completed
        </button>
      </div>

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
