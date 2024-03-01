import { useSelector } from "react-redux";
import TodoTile from "./TodoTile";

export default function DisplayTodo() {
  const todos = useSelector((state) => state.todo.todos);
  //   console.log(todos);
  return (
    <div className="overflow-hidden mt-8 shadow-2xl rounded bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue dark:text-LightGrayishBlue">
      <div className="overflow-y-scroll no-scrollbar overflow-x-hidden sm:max-h-[60vh]  max-h-[70vh]">
        {todos.map((todo) => (
          <TodoTile key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
