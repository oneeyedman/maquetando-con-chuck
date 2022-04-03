import { connect } from "react-redux";
import { completeAction, toggleCompletionAction, deleteAction } from "../state/actions";
import { formatDate } from "../utils/date";


function Task(props) {
  const { label, id, done, completion_date } = props;

  const handleStatusChange = event => {
    const taskID = event.currentTarget.id;
    props.toggle(taskID);
  }

  const handleDelete = event => {
    const taskID = event.currentTarget.dataset.id;
    props.del(taskID);
  }

  return (
    <div className={`task ${done ? 'task--done':''}`}>
      <input id={ id } name="tasks" className="task__field" type="checkbox" onChange={ handleStatusChange } checked={ done } />
      <label htmlFor={ id } className="task__label">{ label }</label>
      { done && <time dateTime={ completion_date } className="task__completion-date">{ formatDate(completion_date) }</time> }

      <button type="button" className="task__delete-me" data-id={ id } onClick={ handleDelete }>Borrar tarea: { label }</button>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    complete: (id) => dispatch(completeAction(id)),
    toggle: (id) => dispatch(toggleCompletionAction(id)),
    del: (id) => dispatch(deleteAction(id)),
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Task);
