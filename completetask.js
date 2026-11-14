function completeTask(tasks, taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
    console.log("Task completed: " + task.name);
  }
  return tasks;
}

module.exports = completeTask;
