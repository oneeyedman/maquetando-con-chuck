function findTaskIndex(taskID, taskList) {
  return taskList.findIndex(task => task.id === taskID);
}


function getNextID(list) {
  return list.reduce((acc, val) => acc >= val.id ? acc : val.id, 0) + 1;
}


function orderByDate(a,b) {
  const aDate = new Date(a.creation_date);
  const bDate = new Date(b.creation_date);
  return aDate - bDate;
}


function orderByCompletionStatus(a,b) {
  if (a.done && !b.done) {
    return 1;
  } else if (!a.done && b.done) {
    return -1;
  } else {
    return 0;
  }
}


export {
  findTaskIndex,
  getNextID,
  orderByDate,
  orderByCompletionStatus,
}
