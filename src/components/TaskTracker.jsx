import React, { Component } from 'react';
import TaskTable from './TaskTable.jsx';

class TaskTracker extends Component {
    render() {
        const sampleContent = [
            { id: 1, name: 'Test Task', author: 'Sam Gavinio' }
        ];

        return (
            <div>
                <div className="row">
                    <form >
                        <div className="form-group">
                            <label htmlFor="taskname">Taskname</label>
                            <input id="taskname" className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input id="author" className="form-control" type="text"/>
                        </div>
                        <button type="submit" className="btn btn-default">Add a new task</button>
                    </form>
                </div>
                <div className="row task-app-container">
                    <TaskTable taskData={sampleContent}/>
                </div>
            </div>
        )
    };
}

export default TaskTracker;
