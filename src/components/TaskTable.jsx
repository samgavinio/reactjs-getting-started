import React, { Component } from 'react';
import Task from './Task.jsx';

class TaskTable extends Component {
    render() {
        const deleteTask = this.props.deleteTask;
        const tasks = this.props.taskData ? this.props.taskData.map(function(task, i){
            return <Task name={task.name}
                         author={task.author}
                         taskId={task.id}
                         deleteTask={deleteTask}
                         key={i}
                   />
        }) : null;
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
    }
}

export default TaskTable;