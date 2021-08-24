import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('please add task')
            return
        }
        onAdd({ text })
        setText('')
    }

    return (
        <div className="create">
            <h2>Today's Tasks</h2>
                <form onSubmit={onSubmit}>
                    <input 
                    type="text"
                    placeholder="Add Task..."
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                    <button>Add Task</button>
                </form>
        </div>
    );
}
 
export default AddTask;