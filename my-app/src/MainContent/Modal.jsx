import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../store/slices/tasksSlice";
import { nanoid } from "nanoid";
import { closeModal } from "../store/slices/modalStateSlice";
import { useForm } from "react-hook-form";
import ModalError from "./ModalError";
import { addGroup } from "../store/slices/groupsSlice";

export default function Modal() {

    const modalState = useSelector((state) => state.modalStateSlice.isOpen);
    const taskToEdit = useSelector((state) => state.taskToEditSlice.task);

    const dispatch = useDispatch();

    const [selectColor, setSelectColor] = useState("bg-transparent");

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur", shouldUnregister: true });

    useEffect(() => {
        switch (selectColor) {
            case "Uncompleted":
                setSelectColor("bg-tag_pink");
                break;
            case "In progress":
                setSelectColor("bg-tag_yellow");
                break;
            case "Completed":
                setSelectColor("bg-tag_green");
                break;
            default:
                break;
        }
    }, [selectColor]);

    const onSubmit = (event) => {
        const task = {
            title: event.title,
            description: event.description,
            tag: event.tag,
            color: selectColor,
            date: event.date,
        };

        if (taskToEdit.id === undefined) {
            dispatch(addGroup(event.tag));
            dispatch(addTask({ ...task, id: nanoid() }));
        } else {
            dispatch(editTask({ ...task, id: taskToEdit.id }));
        }

        setSelectColor("bg-transparent");
        dispatch(closeModal());
        reset();
    };

    return (
        <div
            className={`h-screen w-screen justify-center items-center  fixed z-10
        ${modalState ? "flex blur-none" : "hidden"}`}
        >
            <form
                className="w-1/4 flex flex-col justify-between items-start opacity-75 bg-white relative rounded-md p-8 
            bg-gradient-to-br from-white to-purple4 shadow-md shadow-purple4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register("title", { required: "Title is required" })}
                    name="title"
                    type="text"
                    className="w-full text-xl font-bold py-3 pl-2 bg-transparent border-dotted border-purple1 border-4 rounded-md"
                    placeholder={
                        taskToEdit.title === undefined ? "Task" : taskToEdit.title
                    }
                />
                {errors.title && <ModalError error={errors.title.message} />}

                <textarea
                    {...register("description", { required: "Description is required" })}
                    name="description"
                    type="text"
                    className="w-full text-lg font-semibold py-2 pl-2 mt-5 bg-transparent border-dotted border-purple1 border-2 rounded-md"
                    placeholder={
                        taskToEdit.description === undefined
                            ? "Description"
                            : taskToEdit.description
                    }
                />
                {errors.description && (
                    <ModalError error={errors.description.message} />
                )}

                <div className="w-full flex flex-row justify-start items-center mt-5 relative">
                    <select
                        {...register("tag", { required: "Select tag" })}
                        name="tag"
                        className={`p-2  border-double border-purple1 border-4 rounded-md ${selectColor}`}
                        onChange={(e) => {
                            setSelectColor(e.target.value);
                            console.log("select");
                        }}
                    >
                        <option selected value="" className="bg-white">
                            Add tag
                        </option>
                        <option value="Uncompleted" className="bg-tag_pink">
                            Uncompeleted
                        </option>
                        <option value="In progress" className="bg-tag_yellow">
                            In progress
                        </option>
                        <option value="Completed" className="bg-tag_green">
                            Compeleted
                        </option>
                    </select>

                    <input
                        {...register("date", { required: "Select deadline" })}
                        type="date"
                        className="absolute bottom-0 right-0 p-2 bg-transparent border-solid border-purple1 border-2 rounded-md"
                    ></input>
                </div>

                <div
                    className={`relative w-full mt-10 ${errors.tag || errors.date ? "block" : "hidden"
                        }`}
                >
                    <div className="absolute bottom-0 left-0">
                        {errors.tag && <ModalError error={errors.tag.message} />}
                    </div>
                    <div className="absolute bottom-0 right-0">
                        {errors.date && <ModalError error={errors.date.message} />}
                    </div>
                </div>

                <div className="w-full flex flex-row justify-end items-center mt-5 p-2">
                    <button
                        type="reset"
                        className="mr-3 px-6 py-2 text-lg bg-purple4 rounded-lg text-white ring-2 ring-offset-1 ring-purple4 shadow-md shadow-purple4"
                        onClick={() => {
                            dispatch(closeModal());
                            setSelectColor("bg-transparent");
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className={`${!isValid ? "opacity-50" : ""
                            } px-6 py-2 text-lg bg-purple3 rounded-lg text-white ring-2 ring-offset-1 ring-purple4 shadow-md shadow-purple4`}
                        disabled={!isValid}
                    >
                        Apply
                    </button>
                </div>
            </form>
        </div>
    );
}
