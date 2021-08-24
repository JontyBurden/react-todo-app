import {FaTimes} from 'react-icons/fa'

const Task = ({ task , onDelete }) => {
    return (
        <div className="task-preview">
            <h2>{task.text}</h2>
            <div className="task-details">
                <button><FaTimes 
                onClick={() => onDelete(task.id)} />
                </button>
            </div>
        </div>
    );
}
 
export default Task;