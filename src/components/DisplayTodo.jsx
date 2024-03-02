import { useSelector } from "react-redux";
import TodoTile from "./TodoTile";
import { useEffect, useState } from "react";
import ExtraFeatureBar from "./ExtraFeatureBar";

export default function DisplayTodo() {
  const filerState = useSelector((state) => state.filter);
  const [todos, setTodos] = useState([]);
  const allTodos = useSelector((state) => state.todo.todos);
  const activeTodos = useSelector((state) => state.todo.activeTodo);
  const completedTodos = useSelector((state) => state.todo.completedTodo);

  useEffect(() => {
    if (filerState.all) {
      setTodos(allTodos);
    }
    if (filerState.active) {
      setTodos(activeTodos);
    }
    if (filerState.completed) {
      setTodos(completedTodos);
    }
  }, [filerState, allTodos, activeTodos, completedTodos]);

  return (
    <div className="overflow-hidden mt-5 shadow-2xl rounded bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue dark:text-LightGrayishBlue">
      <div className="overflow-y-scroll no-scrollbar overflow-x-hidden sm:max-h-[60vh]  max-h-[60vh]">
        {todos.map((todo) => (
          <TodoTile key={todo?.id} {...todo} />
        ))}
      </div>
      <ExtraFeatureBar />
    </div>
  );
}
