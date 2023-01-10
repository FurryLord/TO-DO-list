import { useEffect } from "react";

function Filter(props) {


    return (
        <select onChange={(e) => { props.sortTasks(e.target.value);  console.log("filter")}} className="bg-purple3 basis-1/6 text-white text-xl rounded-md py-3 px-3">
            <option selected disabled value="">Sort by</option>
            <option value="date">By deadline</option>
            <option value="name" >By name</option>
        </select>
    );
}

export default Filter;