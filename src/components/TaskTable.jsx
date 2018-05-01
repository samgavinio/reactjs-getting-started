import React, { Component } from 'react';
import Task from './Task';

const TaskTable = ({ deleteTask, taskData }) => {
  const tasks = taskData ? taskData.map((task, i) => (
    <Task
      name={task.name}
      author={task.author}
      taskId={task.id}
      deleteTask={deleteTask}
      key={i}
    />
  )) : null;

  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <th>Task</th>
          <th>Author</th>
          <th></th>
        </tr>
        {tasks}
      </tbody>
    </table>
  );
};

export default TaskTable;
