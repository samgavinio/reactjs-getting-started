export default (state = {}, action) => {
    switch(action.type) {
    case 'DELETE_TASK':
        return state;
    case 'ADD_TASK':
        let tasks = state.tasks;
        tasks.push(action.task);

        return Object.assign({}, state, { tasks })
    }

    return state;
}
