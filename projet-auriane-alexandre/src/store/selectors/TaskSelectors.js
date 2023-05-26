export const FiltredTaskSelector = (state) => {
    if(state.filter === null) {
        return state.tasks
    }
    return state.tasks.filter((task) => task.done === state.filter)
}