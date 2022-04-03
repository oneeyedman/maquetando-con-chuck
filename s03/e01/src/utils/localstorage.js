const TASK_LIST = 'mis-oraciones';
function saveTasks(list) {
  localStorage.setItem(TASK_LIST, JSON.stringify(list));
}

function loadTasks() {
  const list = localStorage.getItem(TASK_LIST);
  return list ? JSON.parse(list) : [];
}

function saveLocalStorage(state) {
  saveTasks(state);
  return state;
}

export {
  saveTasks,
  loadTasks,
  saveLocalStorage,
}
