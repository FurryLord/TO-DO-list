import { useDispatch } from "react-redux";
import { setFilteredSearched } from "../store/slices/filterStateSlice";
import { searchTasks } from "../store/slices/tasksSlice";

function Searcher() {

  const dispatch = useDispatch();

  return (
    <div className="flex justify-end items-center text-xl text-white basis-1/6  relative">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          dispatch(searchTasks(e.target.value));
          dispatch(setFilteredSearched(e.target.value));
        }}
        className="bg-purple3 grow rounded-md py-3 px-3"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-3 fill-white absolute"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}

export default Searcher;
