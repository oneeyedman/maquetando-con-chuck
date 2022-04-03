import { loadTasks } from "../utils/localstorage";

const state = {
  list: loadTasks()
};

export default state;
