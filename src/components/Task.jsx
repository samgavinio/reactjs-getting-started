import React, { Component } from 'react';

const Task = ({ name, author, taskId, deleteTask }) => (
  <tr>
    <td>
      {name}
    </td>
    <td>
      {author}
    </td>
    <td>
      <button
        type="submit"
        className="btn btn-default"
        onClick={() => deleteTask(taskId)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default Task;
