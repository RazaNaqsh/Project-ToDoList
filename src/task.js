import taskComplete from "./completeTask";

class TaskCreator {
	constructor(title, currentTab) {
		this.title = title;
		this.tab = currentTab;
	}
}
let currentTab;
// const Inbox = [
// 	{
// 		title: "TestTask1",
// 		tab: "Inbox",
// 	},
// 	{
// 		title: "testTask2",
// 		tab: "Inbox",
// 	},
// ];

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");

function domFactory(item) {
	const divItem = document.createElement("div");
	divItem.classList.add("listContainer__listItem");

	const inputCheck = document.createElement("input");
	inputCheck.type = "checkbox";
	inputCheck.classList.add("taskCheckbox");

	const para = document.createElement("p");
	para.textContent = `${item.title}`;

	divItem.append(inputCheck, para);
	list.append(divItem);
}

function displayToDom() {
	currentTab.forEach((item) => {
		domFactory(item);
	});
}

function resetScreen() {
	list.style.opacity = "1";
	document.getElementById("taskTitle").value = "";
	taskModal.style.display = "none";
}
function addToArray(e) {
	e.preventDefault();
	const taskTitle = document.getElementById("taskTitle").value;
	const isEmpty = taskTitle === "";
	if (!isEmpty) {
		const taskItem = new TaskCreator(taskTitle, "Inbox");
		currentTab.push(taskItem);
		resetScreen();
		domFactory(taskItem);
		taskComplete();
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

export default function task(tab) {
	currentTab = tab;
	addTaskBtn.addEventListener("click", createTask);
	displayToDom();
}
