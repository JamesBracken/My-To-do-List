import { createContext, useState } from "react";
import { type Task, type Tasks } from "../../models/taskModels";

type TaskContextType = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>
}

export const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])

    return (
        <TaskContext value={{ tasks, setTasks }}>
            {children}
        </TaskContext>
    )
}