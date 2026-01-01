import { type Task, type Tasks } from "../models/taskModels";

type deleteTaskParams = {
    taskId: number,
    tasks: Tasks,
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>
}
const deleteTask = ({taskId, tasks, setTasks}: deleteTaskParams) => {
    if(tasks[taskId]) {
        setTasks(tasks.filter((task: Task) => {
            return task !== tasks[taskId]
        }))
    } else {
        console.error(`Task: ${taskId} cannot be found`)
    }
}

export default deleteTask;