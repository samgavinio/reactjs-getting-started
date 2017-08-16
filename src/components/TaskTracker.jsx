import React, { Component } from 'react';
import TaskTable from './TaskTable.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/tasks';

class TaskTracker extends Component {
    render() {
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
                    <TaskTable taskData={this.props.tasks} deleteTask={this.props.deleteTask}/>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, actions)(TaskTracker);
