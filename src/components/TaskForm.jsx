
function TaskForm(){
    return(
        <section className="task-form">
            <h2>Create Task</h2>
            <form>
                <input type="text"
                placeholder="task title" />
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}
export default TaskForm;