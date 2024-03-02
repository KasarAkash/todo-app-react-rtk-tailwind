import { FaRegCircle } from "react-icons/fa";
import cross from "../assets/icon-cross.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  completeActiveTodo,
  completeCompTodo,
  completeTodo,
  removeActiveTodo,
  removeCompTodo,
  removeTodo,
} from "../redux/todoSlice";

export default function TodoTile({ id, isCompleted, text }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full first:border-none flex items-center justify-between last:border-none  border-y border-LightGrayishBlue1 px-4 py-5">
      <div className="flex items-center">
        <button>
          {isCompleted ? (
            <FaRegCircleCheck
              size={"1.4rem"}
              onClick={(e) => {
                e.preventDefault();
                dispatch(completeActiveTodo({ id, isCompleted: false }));
                dispatch(completeCompTodo({ id, isCompleted: false }));
                dispatch(completeTodo({ id, isCompleted: false }));
              }}
              className="mr-4"
              color="green"
            />
          ) : (
            <FaRegCircle
              size={"1.4rem"}
              onClick={(e) => {
                e.preventDefault();
                dispatch(completeActiveTodo({ id, isCompleted: true }));
                dispatch(completeCompTodo({ id, isCompleted: true }));
                dispatch(completeTodo({ id, isCompleted: true }));
              }}
              className="mr-4"
              color="red"
            />
          )}
        </button>
        <p className={`text-lg ${isCompleted && "line-through"} pr-4`}>
          {text}
        </p>
      </div>

      <img
        src={cross}
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeTodo(id));
          dispatch(removeActiveTodo(id));
          dispatch(removeCompTodo(id));
        }}
        className="dark:text-LightGrayishBlue"
      />
    </div>
  );
}
