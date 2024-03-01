import { FaRegCircle } from "react-icons/fa";
import cross from "../assets/icon-cross.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../redux/todoSlice";

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
                dispatch(completeTodo({ id, isCompleted: true }));
              }}
              className="mr-4"
              color="red"
            />
          )}
        </button>
        <p className={`text-lg ${isCompleted && "line-through"}`}>{text}</p>
      </div>

      <img
        src={cross}
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeTodo(id));
        }}
        className="dark:text-LightGrayishBlue"
      />
    </div>
  );
}
