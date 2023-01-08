function Filter() {
    return (
        <select className="bg-purple3 basis-1/6 text-white text-xl rounded-md py-3 px-3">
            <option value="">By deadline</option>
            <option value="" selected>By name</option>
        </select>
    );
}

export default Filter;