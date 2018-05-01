import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/tasks';
import TaskTracker from '../components/TaskTracker';

const mapStateToProps = state => ({
  tasks: state.tasks,
  taskAuthor: state.form.author,
  taskName: state.form.name,
});

const mapDispatchToProps = dispatch => Object.assign(
  { dispatch },
  bindActionCreators(actions, dispatch)
);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TaskTracker);

export default AppContainer;
