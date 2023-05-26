//import {connect} from "react-redux";
import {FiltredTaskSelector} from "../../store/selectors/TaskSelectors.js";
import {removeTask, toggleTask} from "../../store/actions/TaskActions.js";
import {useDispatch, useSelector} from "react-redux";


const TaskItem = ({task, onToggle, onDelete}) => {
    return <li>
            <input type={'checkbox'} onChange={() => onToggle(task)} checked={task.done}/>
            <div>{task.task}</div>
            <button onClick={() => {onDelete(task)}}>❌</button>
            </li>
}

const TaskTemplate = ({task, onToggle, onDelete}) => {
    return <ul>{
        task.map((t) => <TaskItem key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} /> )
    }</ul>
}

function TaskList() {

    const task = useSelector(FiltredTaskSelector)
    const dispatch = useDispatch()
    const onToggle = (task) => dispatch(toggleTask(task))
    const onDelete = (task) => dispatch(removeTask(task))

    return <TaskTemplate task={task} onToggle={onToggle} onDelete={onDelete}/>
}

export default TaskList