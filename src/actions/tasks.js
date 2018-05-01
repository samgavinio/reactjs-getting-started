import {
  DELETE_TASK,
  ADD_TASK,
} from './constants';

export const deleteTask = id => ({
  type: DELETE_TASK,
  id
});

export const addTask = task => ({
  type: ADD_TASK,
  task
})
