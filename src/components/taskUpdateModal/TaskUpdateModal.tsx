type TaskUpdateModalParams = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const TaskUpdateModal = ({ isOpen, setIsOpen }: TaskUpdateModalParams) => {

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
                    <button id="task-update-modal__foreground-submit">Submit</button>
                </div>
            </div>
        )
    }
}

export default TaskUpdateModal;