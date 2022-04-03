import { ACTION_ADD, ACTION_COMPLETE, ACTION_TOGGLE_COMPLETION , ACTION_DELETE} from "./actionTypes";
import { actionAdd, actionComplete, actionToggleCompletion, actionDelete } from "./reducerActions";
import { saveLocalStorage } from "../utils/localstorage";
import initialState from "./initialState";

function listReducer(state = initialState.list, action) {
  switch (action.type) {
    case ACTION_ADD:
      return saveLocalStorage(actionAdd(state, action.payload));
    case ACTION_COMPLETE:
      return saveLocalStorage(actionComplete(state, action.payload));
    case ACTION_TOGGLE_COMPLETION:
      return saveLocalStorage(actionToggleCompletion(state, action.payload));
    case ACTION_DELETE:
      return saveLocalStorage(actionDelete(state, action.payload));
    default:
      return state;
  }
}

export {
  listReducer
}
