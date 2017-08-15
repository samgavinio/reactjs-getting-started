import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.author}
                </td>
                <td>
                    <button type="submit"
                            className="btn btn-default"
                            onClick={() => this.props.deleteTask(this.props.taskId) }>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Task;
