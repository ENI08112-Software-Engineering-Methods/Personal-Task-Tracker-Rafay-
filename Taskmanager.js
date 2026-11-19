let tasks = [];

function addTask(task) {
  if (!task || task.trim() === "") return;
  const newTask = { id: Date.now(), name: task, completed: false };
  tasks.push(newTask);
  console.log("Task added: " + task);
  return newTask;
}

module.exports = { tasks, addTask };