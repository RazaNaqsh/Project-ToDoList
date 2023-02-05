function newTaskModal() {
	const taskModal = document.getElementById("createTaskModal");
	const list = document.querySelector("#lists");
	list.style.opacity = "0.7";
	taskModal.style.display = "flex";
}
function createTask() {
	newTaskModal();
}

export default function task() {
	const Inbox = [];
	const addTaskBtn = document.getElementById("addTask");
	addTaskBtn.addEventListener("click", createTask);
}
