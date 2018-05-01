import React, { Component } from 'react';
import TaskTable from './TaskTable';

class TaskTracker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            author: ''
        };
    }

    onChangeTaskname(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
            author :e.target.value
        });
    }

    render() {
        const { tasks, deleteTask } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="taskname">Taskname</label>
                        <input id="taskname" className="form-control" type="text" value={this.state.name} onChange={this.onChangeTaskname.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input id="author" className="form-control" type="text" value={this.state.author} onChange={this.onChangeAuthor.bind(this)}/>
                    </div>
                    <input type="submit" onClick={() => this.props.addTask({
                            author: this.state.author,
                            name: this.state.name
                        })} className="btn btn-default" value="Add a new task"/>
                </div>
                <div className="row task-app-container">
                    <TaskTable taskData={tasks} deleteTask={deleteTask}/>
                </div>
            </div>
        )
    };
}

export default TaskTracker;
