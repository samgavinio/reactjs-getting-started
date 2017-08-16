import React from 'react';
import ReactDOM from 'react-dom';
import TaskTracker from './components/TaskTracker.jsx';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/tasks';
import { addTask } from './actions/tasks'

const store = createStore(reducer, {
    tasks: []
});

store.dispatch(addTask({
    id: 1,
    author: 'Mintegrations',
    name: 'Getting Started with React and Redux'
}));

ReactDOM.render(
    <Provider store={store}>
        <TaskTracker/>
    </Provider>,
    document.getElementById('root')
);
