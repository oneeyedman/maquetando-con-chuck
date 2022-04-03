import { connect } from 'react-redux';
import { orderByDate, orderByCompletionStatus } from '../utils/lists';
import Task from './Task';


function TaskList(props) {
  const task_list = [...props.list];
  return (
    <ul className="app__todo-list">
      {task_list
        .map(i=>i)
        .sort(orderByDate)
        .sort(orderByCompletionStatus)
        .map(task => <li className="app__todo-item" key={task.id}><Task {...task} /></li>)}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return { list: state.list };
}


export default connect(mapStateToProps)(TaskList);
