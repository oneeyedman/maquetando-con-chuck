import { saveTasks } from "../utils/localstorage";
import { findTaskIndex } from "../utils/lists";


function actionAdd(state, payload) {
  const newState = [...state];
  newState.push(payload);
  saveTasks(newState);
  return newState;
}


function actionComplete(state, payload) {
  const newState = [...state];
  const index = findTaskIndex(payload.id, newState);
  if (index >= 0) {
    newState[index].done = true;
    newState[index].completion_date = new Date().toISOString();
  }
  saveTasks(newState);
  return newState;
}


function actionToggleCompletion(state, payload) {
  const newState = [...state];
  const index = findTaskIndex(payload.id, newState);
  if (index >= 0) {
    newState[index].done = !newState[index].done;
    newState[index].completion_date = newState[index].done ? new Date().toISOString() : null;
  }
  saveTasks(newState);
  return newState;
}


function actionDelete(state, payload) {
  const newState = [...state];
  const index = findTaskIndex(payload.id, newState);
  if (index >= 0) {
    newState.splice(index, 1);
  }
  saveTasks(newState);
  return newState;
}


export {
  actionAdd,
  actionComplete,
  actionToggleCompletion,
  actionDelete,
}
