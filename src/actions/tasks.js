import {
  DELETE_TASK,
  ADD_TASK,
  FORM_CHANGE_TASK_NAME,
  FORM_CHANGE_TASK_AUTHOR,
  FORM_SUBMIT,
} from './constants';

export const deleteTask = id => ({
  type: DELETE_TASK,
  id
});

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const changeTaskName = name => ({
  type: FORM_CHANGE_TASK_NAME,
  name
});

export const changeTaskAuthor = author => ({
  type: FORM_CHANGE_TASK_AUTHOR,
  author
});

export const submitForm = () => ({
  type: FORM_SUBMIT,
});
