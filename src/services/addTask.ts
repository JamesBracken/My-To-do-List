import type { Tasks } from "../models/taskModels";

type addTaskParams = {
    tasks: Tasks,
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>
}
const addTask = ({ tasks, setTasks }: addTaskParams) => {
    const taskInput = document.getElementById("addTaskInput") as HTMLInputElement;
    if (taskInput.value !== "") {
        setTasks([
            ...tasks,
            {
                title: taskInput.value,
                status: "incomplete"
            }
        ])
    }
}

export default addTask;