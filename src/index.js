import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import reducer from './reducers/tasks';
import { addTask } from './actions/tasks'

const store = createStore(reducer, {
  tasks: [],
  form: {
    author: '',
    name: '',
  }
});

store.dispatch(addTask({
  author: 'Mintegrations',
  name: 'Getting Started with React and Redux'
}));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
