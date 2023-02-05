class TaskCreator {
	constructor(title) {
		this.title = title;
	}
}
const Inbox = [];
const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");

function newTaskModal() {
	const list = document.querySelector("#lists");
	list.style.opacity = "0.7";
	taskModal.style.display = "flex";
}
function submitTaskData() {
	const submitTaskBtn = document.getElementById("createTaskBtn");
	submitTaskBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const taskTitle = document.getElementById("taskTitle").value;
		if (taskTitle !== "") {
			const taskItem = new TaskCreator(taskTitle);
			Inbox.push(taskItem);
			document.getElementById("taskTitle").value = "";
			addTaskBtn.removeEventListener("click", createTask);
			addTaskBtn.addEventListener("click", createTask);
			console.log(Inbox);

			taskModal.style.display = "none";
		}
	});
}
function createTask() {
	newTaskModal();
	submitTaskData();
}

export default function task() {
	addTaskBtn.addEventListener("click", createTask);
}
