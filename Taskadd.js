function addTask(tasks, taskName) {
  if (!taskName || taskName.trim() === "") {
    return tasks;
  }
  tasks.push({ id: Date.now(), name: taskName, completed: false });
  console.log("Task added: " + taskName);
  return tasks;
}

module.exports = addTask;