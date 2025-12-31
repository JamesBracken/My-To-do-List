import { useContext } from "react"
import { useState } from "react";

import { TaskContext } from "../components/taskContext/TaskContext"
import TaskUpdateModal from "../components/taskUpdateModal/TaskUpdateModal";

import addTask from "../services/addTask";
import deleteTask from "../services/deleteTask"

import type { Task } from "../models/taskModels";

const ToDoList = () => {
    const taskContext = useContext(TaskContext);
    if (!taskContext) throw new Error("taskContext does not exist")
    const { tasks, setTasks } = taskContext;
    const [isTaskEditModalOpen, setIsTaskEditModalOpen] = useState(false);
    const [activeEditTask, setActiveEditTask] = useState<number | null>(null);
    const taskList = tasks.map((task: Task, taskId: number) => {
        return (
            // individual task
            // Add in further info such as notes, label etc.
            <div key={taskId}>
                <h2>{task.title}</h2>
                <p>{task.status}</p>
                <button onClick={() => {
                    setActiveEditTask(taskId)
                    setIsTaskEditModalOpen(true)
                }}>Edit</button>
                <button onClick={() => deleteTask({ taskId, tasks, setTasks })}>-</button>
            </div>
        )
    })
    return (
        <>
            <label htmlFor="addTaskInput">Add Task</label>
            <input id="addTaskInput"></input>
            <button onClick={() => addTask({ tasks, setTasks })}>+</button>
            {taskList}
            {isTaskEditModalOpen && <TaskUpdateModal activeEditTask={activeEditTask} setActiveEditTask={setActiveEditTask} setIsTaskEditModalOpen={setIsTaskEditModalOpen} tasks={tasks} setTasks={setTasks} />}
        </>
    )
}

export default ToDoList;