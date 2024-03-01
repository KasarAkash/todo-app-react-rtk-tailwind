import { useState } from "react";
import check from "../assets/icon-check.svg";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function InputBox() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="w-full flex bg-white rounded-full shadow-xl items-center justify-between text-xl overflow-hidden pl-4 mt-8 dark:bg-VeryDarkBlue">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
        }}
        className="outline-none w-full px-3 dark:bg-VeryDarkBlue dark:text-LightGrayishBlue"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addTodo(text));
          setText("");
        }}
        className="rounded-full bg-green-500 p-3"
      >
        <img src={check} className="object-contain size-6" />
      </button>
    </div>
  );
}
