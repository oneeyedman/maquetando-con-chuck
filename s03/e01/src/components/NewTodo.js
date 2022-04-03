import React from 'react';
import { addAction } from "../state/actions";
import { connect } from "react-redux";
import { getNextID } from '../utils/lists';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: ''
    };
  }

  getTaskName = (event) => {
    const name = event.currentTarget.value;
    this.setState({task_name: name});
  }

  handleNewTodoAddition = event => {
    const taskName = this.state.task_name.trim();
    const newID = getNextID(this.props.list);
    if (taskName) {
      console.log(`La nueva tarea se llama ${taskName}`)
     this.props.add({
       id: newID,
       creation_date: new Date().toISOString(),
       label: taskName,
       done: false,
       completion_date: null
     });
     this.setState({task_name: ''})
    } else {
      console.log('Que qué?');
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.handleNewTodoAddition()
  }

  render() {
    return (<form action="" className="app__add-todo-form form" onSubmit={ this.handleSubmit }>
      <div className="form__row">
        <label htmlFor="newTodoItem" className="form__label sr">Añadir nueva tarea</label>
        <input id="newTodoItem" name="newTodoItem" className="form__field" type="text" onChange={this.getTaskName}
               value={this.state.task_name}/>
      </div>
      <div className="form__row">
        <button className="form__button form__add" type="button" onClick={this.handleNewTodoAddition}>Añadir</button>
      </div>
    </form>);
  }
}

const mapStateToProps = (state) => {
  return { list: state.list};
};

const mapDispatchToProps = (dispatch) => {
  return { add: (obj) => dispatch(addAction(obj)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(NewTodo);
