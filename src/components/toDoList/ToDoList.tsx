

const ToDoList = () => {
    const mockData = ["Laundy", "Dishes", "Hoover"]
    const taskList = mockData.map(task => {
        return (
            // individual task
            // Add in further info such as notes, label etc.
            <div>
                <h2>{task}</h2>
                <p></p>
            </div>
        )
    })
    return (
        <>
            {taskList}
        </>
    )
}

export default ToDoList