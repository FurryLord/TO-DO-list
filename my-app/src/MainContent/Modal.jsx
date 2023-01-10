
import { useEffect, useState } from 'react'

export default function MyModal(props) {

    const [selectColor, setSelectColor] = useState('bg-transparent')

    useEffect(() => {

        switch (selectColor) {

            case 'Uncompeleted':
                setSelectColor('bg-tag_pink')
                break
            case 'In progress':
                setSelectColor('bg-tag_yellow')
                break
            case 'Compeleted':
                setSelectColor('bg-tag_green')
                break
        }

    }, [selectColor])

    const handleSubmit = ((event) => {
        event.preventDefault();

        console.log(event.target.heading.value);
        console.log(event.target.description.value);
        console.log(event.target.tag.value);
        console.log(selectColor);
        console.log(event.target.date.value);

        const task = {
            name: event.target.heading.value,
            description: event.target.description.value,
            tag: event.target.tag.value,
            color: selectColor,
            date: event.target.date.value,
            id: props.taskToEdit.id
        }

        const buf = [...props.tasks]
        buf[props.taskToEdit.id] = task;
        props.setTasks([...buf]);
        props.setTasksCopy([...buf]);
        props.setTaskToEdit({})

    })


    return (
        <div className={`h-screen w-screen justify-center items-center  fixed z-10
        ${props.modalIsOpen ? 'flex' : 'hidden'} ${props.modalIsOpen ? 'blur-none' : ''}`}>

            <div className='w-1/4 flex flex-col justify-between items-start opacity-75 bg-white relative rounded-md p-8 
            bg-gradient-to-br from-white to-purple4 shadow-md shadow-purple4'>
                <form onSubmit={handleSubmit}>

                    <input name="heading" type="text" className='w-full text-xl font-bold py-3 pl-2 bg-transparent border-dotted border-purple1 border-4 rounded-md'
                        placeholder={(props.taskToEdit.name === undefined || props.taskToEdit.name === "") ? `Task ${props.taskToEdit.id + 1}` : props.taskToEdit.name} />
                    <textarea name="description" type="text" className='w-full text-lg font-semibold py-2 pl-2 mt-5 bg-transparent border-dotted border-purple1 border-2 rounded-md'
                        placeholder={(props.taskToEdit.description === undefined || props.taskToEdit.description === "") ? "Description" : props.taskToEdit.description} />

                    <div className='w-full flex flex-row justify-start items-center mt-5 relative'>

                        <select name="tag" className={`p-2  border-double border-purple1 border-4 rounded-md ${selectColor}`}
                            onChange={(e) => setSelectColor(e.target.value)} >
                            <option selected disabled name="Add tag" className='bg-white'>Add tag</option>
                            <option name="bg-tag_pink" className='bg-tag_pink'>Uncompeleted</option>
                            <option name="bg-tag_yellow" className='bg-tag_yellow'>In progress</option>
                            <option name="bg-tag_green" className='bg-tag_green'>Compeleted</option>
                        </select>

                        <input name="date" type="date" className='absolute bottom-0 right-0 p-2 bg-transparent border-solid border-purple1 border-2 rounded-md'></input>

                    </div>

                    <div className='w-full flex flex-row justify-end items-center mt-5 p-2'>

                        <button type="reset" className='mr-3 px-6 py-2 text-lg bg-purple4 rounded-lg text-white ring-2 ring-offset-1 ring-purple4 shadow-md shadow-purple4' onClick={() => { props.setModalIsOpen(false) }}>Cancel</button>
                        <button type="submit" className='px-6 py-2 text-lg bg-purple3 rounded-lg text-white ring-2 ring-offset-1 ring-purple4 shadow-md shadow-purple4'
                            onClick={() => {
                                props.setModalIsOpen(false)

                            }}>
                            Apply
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}
