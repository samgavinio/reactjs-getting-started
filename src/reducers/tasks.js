export default (state = {}, action) => {
    switch(action.type) {
        case 'DELETE_TASK':
            const tasks = state.tasks.filter( (item, index) => {
                return item.id != action.id
            });

            return Object.assign({}, state, {
                tasks
            });
        case 'ADD_TASK':
            const newTask = Object.assign({}, action.task, {
                id: `${action.task.name}.${action.task.author}`,
            });

            return Object.assign({}, state, {
                tasks: [...state.tasks, newTask]
            });
    }

    return state;
}
