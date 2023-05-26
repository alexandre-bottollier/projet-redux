import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/actions/TaskActions.js";

const AddTaskTemplate = ({onAdd}) => {
    const [newTask, setNewTask] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) =>
    {
        setLoading(true)
        e.preventDefault()
        await onAdd(newTask)
        setNewTask('')
        setLoading(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                placeholder={"New task"}
                onChange={(e) => {setNewTask(e.target.value)}}
                value={newTask}
            />
            <button role={'submit'} disabled={loading}>✔️</button>
        </form>
    )
}

function AddTask() {
    const dispatch = useDispatch()

    const onAdd = (value) => dispatch(addTask(value))

    return <><AddTaskTemplate onAdd={onAdd} /></>
}

export default AddTask