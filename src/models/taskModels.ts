export interface Task {
    title: string,
    progress: "complete" | "incomplete" // may add archived in future
}

export type Tasks = Task[];