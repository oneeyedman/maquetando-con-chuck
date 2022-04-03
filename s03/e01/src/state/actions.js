import { ACTION_ADD, ACTION_COMPLETE, ACTION_TOGGLE_COMPLETION, ACTION_DELETE } from "./actionTypes";

function addAction(obj) {
  return {
    type: ACTION_ADD,
    payload: {...obj}
  }
}

function completeAction(id) {
  return {
    type: ACTION_COMPLETE,
    payload: { id: Number(id) }
  }
}

function toggleCompletionAction(id) {
  return {
    type: ACTION_TOGGLE_COMPLETION,
    payload: { id: Number(id) }
  }
}

function deleteAction(id) {
  return {
    type: ACTION_DELETE,
    payload: { id: Number(id) }
  }
}

export {
  addAction,
  completeAction,
  toggleCompletionAction,
  deleteAction,
};
