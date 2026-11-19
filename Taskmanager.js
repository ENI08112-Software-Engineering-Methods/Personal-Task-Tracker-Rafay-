let tasks = [];

function addTask(task) {
  if (!task || task.trim() === "") return;
  const newTask = { id: Date.now(), name: task, completed: false };
  tasks.push(newTask);
  console.log("Task added: " + task);
  return newTask;
}

function completeTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
    console.log("Task completed: " + task.name);
  }
  return task;
}

module.exports = { tasks, addTask, completeTask };