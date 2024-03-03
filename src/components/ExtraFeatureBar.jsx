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
  const todosLength = useSelector((state) => state.todo.todosLength);
  const activeTodoLength = useSelector((state) => state.todo.activeTodoLength);
  const completedTodoLength = useSelector(
    (state) => state.todo.completedTodoLength
  );

  useEffect(() => {
    if (filerState.all) {
      if (todosLength !== length) setLength(() => todosLength);
    }
    if (filerState.active) {
      if (activeTodoLength !== length) setLength(() => activeTodoLength);
    }
    if (filerState.completed) {
      if (completedTodoLength !== length) setLength(() => completedTodoLength);
    }
  }, [filerState, activeTodoLength, todosLength, completedTodoLength, length]);

  return (
    <div className={`flex justify-between items-center p-3`}>
      <p>{length} Items Left</p>

      <div className="hidden gap-4 sm:flex">
        <button
          className={filerState.all ? "text-BrightBlue" : ""}
          onClick={() => {
            setLength(todosLength);
            dispatch(selectAll());
          }}
        >
          All
        </button>
        <button
          className={filerState.active ? "text-BrightBlue" : ""}
          onClick={() => {
            setLength(activeTodoLength);
            dispatch(addActiveTodos());
            dispatch(selectActive());
          }}
        >
          Active
        </button>
        <button
          className={filerState.completed ? "text-BrightBlue" : ""}
          onClick={() => {
            setLength(completedTodoLength);
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
