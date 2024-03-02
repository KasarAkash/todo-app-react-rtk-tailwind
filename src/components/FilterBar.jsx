import { useDispatch, useSelector } from "react-redux";
import { selectActive, selectAll, selectComplete } from "../redux/filterSlice";
import { addActiveTodos, addCompletedTodos } from "../redux/todoSlice";

export default function FilterBar({ show }) {
  const filerState = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className={`${show ? "" : "hidden"}  sm:hidden`}>
      <div className="flex justify-between shadow-2xl rounded mt-2 bg-VeryLightGray text-lg font-semibold dark:text-LightGrayishBlue dark:bg-VeryDarkDesaturatedBlue w-[92vw] py-3 px-14 items-center">
        {todos.length > 0 ? (
          <>
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
          </>
        ) : (
          <p className="text-center text-red-500">No todos to show ...</p>
        )}
      </div>
    </div>
  );
}
