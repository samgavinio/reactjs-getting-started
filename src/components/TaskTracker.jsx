import React, { Component } from 'react';
import TaskTable from './TaskTable';

const TaskTracker = ({
  tasks,
  deleteTask,
  changeTaskName,
  changeTaskAuthor,
  submitForm,
}) => (
  <div>
    <div className="row">
      <div className="form-group">
        <label htmlFor="taskname">Taskname</label>
        <input
          id="taskname"
          className="form-control"
          type="text"
          onChange={(e) => changeTaskName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          className="form-control"
          type="text"
          onChange={(e) => changeTaskAuthor(e.target.value)}
        />
      </div>
      <input
        type="submit"
        onClick={submitForm}
        className="btn btn-default"
        value="Add a new task"
      />
    </div>
    <div className="row task-app-container">
      <TaskTable taskData={tasks} deleteTask={deleteTask}/>
    </div>
  </div>
);

export default TaskTracker;
