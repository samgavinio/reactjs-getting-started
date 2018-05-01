import {
  DELETE_TASK,
  ADD_TASK,
  FORM_CHANGE_TASK_NAME,
  FORM_CHANGE_TASK_AUTHOR,
  FORM_SUBMIT,
} from '../actions/constants';

export default (state = {}, action) => {
  switch(action.type) {
    case DELETE_TASK:
      const tasks = state.tasks.filter( (item, index) => {
        return item.id != action.id
      });

      return Object.assign({}, state, {
        tasks
      });
    case ADD_TASK:
      const task = Object.assign({}, action.task, {
        id: `${action.task.name}.${action.task.author}`,
      });

      return Object.assign({}, state, {
        tasks: [...state.tasks, task]
      });
    case FORM_SUBMIT:
      const newTask = Object.assign({}, {
        id: `${state.form.name}.${state.form.author}`,
        author: state.form.author,
        name: state.form.name,
      });

      return Object.assign({}, state, {
        tasks: [...state.tasks, newTask]
      });
    case FORM_CHANGE_TASK_NAME:
      const formStateName = Object.assign({}, state.form, {
        name: action.name,
      });

      return Object.assign({}, state, { form: formStateName });
    case FORM_CHANGE_TASK_AUTHOR:
      const formStateAuthor = Object.assign({}, state.form, {
        author: action.author,
      });

      return Object.assign({}, state, { form: formStateAuthor });
    default: {
      return state;
    }
  }
}
