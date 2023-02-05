class TaskCreator {
	constructor(title) {
		this.title = title;
	}
}
const Inbox = [
	{
		title: "TestTask1",
	},
	{
		title: "testTask2",
	},
];

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");

function domFactory(item) {
	const divItem = document.createElement("div");
	divItem.classList.add("listContainer__listItem");

	const inputCheck = document.createElement("input");
	inputCheck.type = "checkbox";

	const para = document.createElement("p");
	para.textContent = `${item.title}`;

	divItem.append(inputCheck, para);
	list.append(divItem);
}

function displayToDom() {
	Inbox.forEach((item) => {
		domFactory(item);
	});
}

function resetScreen() {
	list.style.opacity = "1";
	document.getElementById("taskTitle").value = "";

	refreshEvent();

	taskModal.style.display = "none";
}
function addToArray(e) {
	e.preventDefault();
	const taskTitle = document.getElementById("taskTitle").value;
	if (taskTitle !== "") {
		const taskItem = new TaskCreator(taskTitle);
		Inbox.push(taskItem);
		resetScreen();
		domFactory(taskItem);
	}
}
function newTaskModal() {
	list.style.opacity = "0.7";
	taskModal.style.display = "flex";
}

function submitTaskData() {
	const submitTaskBtn = document.getElementById("createTaskBtn");
	submitTaskBtn.addEventListener("click", addToArray);
}

function createTask() {
	newTaskModal();
	submitTaskData();
}

function refreshEvent() {
	addTaskBtn.removeEventListener("click", createTask);
	addTaskBtn.addEventListener("click", createTask);
}

export default function task() {
	addTaskBtn.addEventListener("click", createTask);
	displayToDom();
}
