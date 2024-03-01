import { useDispatch, useSelector } from "react-redux";
import { selectActive, selectAll, selectComplete } from "../redux/filterSlice";

export default function FilterBar({ show }) {
  const filerState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={`${show ? "" : "hidden"}  sm:hidden`}>
      <div className="flex justify-between shadow-2xl rounded mt-2 bg-VeryLightGray text-lg font-semibold dark:text-LightGrayishBlue dark:bg-VeryDarkDesaturatedBlue w-[92vw] py-3 px-14 items-center">
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
            dispatch(selectActive());
          }}
        >
          Active
        </button>
        <button
          className={filerState.completed ? "text-BrightBlue" : ""}
          onClick={() => {
            dispatch(selectComplete());
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
