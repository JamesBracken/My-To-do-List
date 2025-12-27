import type { Tasks } from "../../models/taskModels";
import updateTask from "../../services/updateTask";

type TaskUpdateModalParams = {
    activeEditTask: number | null,
    setActiveEditTask: React.Dispatch<React.SetStateAction<number | null>>
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    tasks: Tasks,
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>
}

const TaskUpdateModal = ({ activeEditTask, setActiveEditTask, isOpen, setIsOpen, tasks, setTasks }: TaskUpdateModalParams) => {

    if (isOpen) {
        return (
            <div className="task-update-modal">
                <div className="task-update-modal__background">
                </div>
                <div className="task-update-modal__foreground">
                    <button onClick={() => setIsOpen(false)}>X</button>
                    <label htmlFor="task-update-modal__foreground-task-title">Title</label>
                    <input type="text" id="task-update-modal__foreground-task-title" />
                    <label htmlFor="task-update-modal__foreground-task-status">Status</label>
                    <input type="checkbox" id="task-update-modal__foreground-task-status" />
                    <button id="task-update-modal__foreground-submit" onClick={() => {
                        updateTask({ activeEditTask, setActiveEditTask, tasks, setTasks })
                        setActiveEditTask(null)
                        setIsOpen(false)
                    }}>Submit</button>
                </div>
            </div >
        )
    }
}

export default TaskUpdateModal;