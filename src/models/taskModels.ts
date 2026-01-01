export interface Task {
    title: string,
    status: "complete" | "incomplete" // may add archived in future
}

export type Tasks = Task[];