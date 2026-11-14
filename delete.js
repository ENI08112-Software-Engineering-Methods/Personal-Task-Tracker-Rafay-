function deleteTask(tasks, taskId) {
  const updatedTasks = tasks.filter((t) => t.id !== taskId);
  console.log("Task deleted with ID: " + taskId);
  return updatedTasks;
}

module.exports = deleteTask;