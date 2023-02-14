import { format } from "date-fns";
import checkTaskComplete from "./completeTask";
import storage from "./storage";
import deleteImage from "./icons/delete-forever.svg";
import editImage from "./icons/note-edit.svg";
import taskFunctions from "./task";

// const stPattysDay = new Date("2020/03/17");
// const formattedDate2 = format(stPattysDay, "MMMM dd, yyyy");
// console.log(formattedDate2);

class TaskCreator {
	constructor(title, currentTab, desc, dueDate, priority) {
		this.title = title;
		this.tab = currentTab;
		this.description = desc;
		this.dueDate = dueDate;
		this.priority = priority;
		this.status = "Incomplete";
	}
}
let currentTab;

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");
const sideBar = document.querySelector(".sideBar");

const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDescription");
const taskDue = document.getElementById("taskDueDate");
const priorityRadios = document.getElementsByName("taskPriority");

function deleteTasks(div) {
	function deleteFromStorage(e) {
		const index = e.target.parentElement.getAttribute("data-index");
		// const domArray = Array.from(list.children);
		// const domIndex = domArray.indexOf(e.target.parentElement.parentElement);
		// console.log(domIndex);
		// if (currentTab === "Inbox")
		// storage.inbox.splice(domIndex, 1);
		// else
		storage.inbox.splice(index, 1);
		// const domEleToRemove = e.target.parentElement.parentElement;
		// list.removeChild(domEleToRemove);
		taskFunctions.clearTaskScreen();
		if (currentTab === "Inbox") taskFunctions.displayToDom(storage.inbox);
		else
			taskFunctions.displayToDom(
				storage.inbox.filter((item) => item.tab === currentTab)
			);
		// console.log(domEleToRemove);
		console.log(storage.inbox);
		// console.log(index);
	}
	div.addEventListener("click", deleteFromStorage);
}

function showDetails(taskDetails, taskObj) {
	taskDetails.addEventListener("click", () => {
		// newTaskModal();
		const taskArray = Array.from(
			document.querySelectorAll(".listContainer__listItem")
		);
		taskArray.forEach((item) => (item.style.pointerEvents = "none"));
		list.style.opacity = "0.7";
		taskTitle.readOnly = true;
		taskDesc.readOnly = true;
		taskDue.readOnly = true;
		// priorityRadios.forEach((radio) => {
		// 	radio.disabled = true;
		// });

		taskTitle.value = taskObj.title;
		taskDesc.value = taskObj.description;
		taskDue.value = taskObj.dueDate;
		priorityRadios.forEach((radio) => {
			if (radio.value === taskObj.priority) radio.checked = true;
			else radio.disabled = true;
		});

		document.getElementById("createTaskBtn").style.display = "none";
		sideBar.style.pointerEvents = "none";
		taskModal.style.display = "flex";
		// document.addEventListener("click", closeWindow);
		document.addEventListener("click", closeWindow);
	});
}

function domFactory(item, index) {
	const divItem = document.createElement("div");
	divItem.classList.add("listContainer__listItem");
	divItem.setAttribute("data-index", `${index}`);

	if (item.priority === "High") divItem.style.borderLeft = "8px solid #ef4444";
	if (item.priority === "Medium")
		divItem.style.borderLeft = "8px solid #fdba74";
	if (item.priority === "Low") divItem.style.borderLeft = "8px solid #4ade80";

	const inputCheck = document.createElement("input");
	inputCheck.type = "checkbox";
	inputCheck.classList.add("taskCheckbox");

	const para = document.createElement("p");
	para.textContent = `${item.title}`;

	const taskDetails = document.createElement("div");
	taskDetails.classList.add("taskDetails");
	taskDetails.textContent = "Details";

	const dateContainer = document.createElement("div");
	dateContainer.classList.add("dateContainer");
	const date = document.createElement("p");
	const formattedDate = format(new Date(item.dueDate), "MMM dd, yyyy");
	date.textContent = `${formattedDate}`;
	dateContainer.append(date);

	const delImg = new Image();
	delImg.src = deleteImage;
	delImg.classList.add("delIcon");

	const editImg = new Image();
	editImg.src = editImage;
	editImg.classList.add("editIcon");
	// deleteEle.textContent = "X";
	divItem.append(inputCheck, para, taskDetails, dateContainer, delImg, editImg);
	checkTaskComplete();
	// deleteEle.append(delImg);
	list.append(divItem);

	// Adds delete task Functionality
	// checkTaskComplete();
	deleteTasks(delImg);
	// const domIndex = Array.from(list.children);
	// console.log(domIndex);

	// task Details
	// console.log(document.querySelectorAll(".taskDetails"));
	showDetails(taskDetails, storage.inbox[index]);
}

function resetScreen() {
	list.style.opacity = "1";
	taskTitle.readOnly = false;
	taskTitle.value = "";
	taskDesc.readOnly = false;
	taskDesc.value = "";
	taskDue.readOnly = false;
	taskDue.value = "";
	priorityRadios.forEach((radio) => {
		radio.disabled = false;
	});
	priorityRadios.forEach((radio) => {
		radio.checked = false;
	});
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	taskModal.style.display = "none";
	document.getElementById("createTaskBtn").style.display = "block";

	const taskArray = Array.from(
		document.querySelectorAll(".listContainer__listItem")
	);
	taskArray.forEach((item) => (item.style.pointerEvents = "auto"));
}

function addToArray(e) {
	e.preventDefault();
	const title = taskTitle.value;
	const desc = taskDesc.value;
	const taskDueDate = taskDue.value;
	// const formattedDate = format(taskDueDate, 'MMMM dd, yyyy')
	// const taskPriority = document.querySelector(
	// 	'input[name="taskPriority"]:checked'
	// ).value;
	let taskPriority = "";
	priorityRadios.forEach((radio) => {
		if (radio.checked) taskPriority = radio.value;
	});

	const isEmpty =
		title !== "" && desc !== "" && taskDueDate !== "" && taskPriority !== "";

	if (isEmpty) {
		const taskItem = new TaskCreator(
			title,
			currentTab,
			desc,
			taskDueDate,
			taskPriority
		);
		storage.inbox.push(taskItem);
		console.log(storage.inbox);
		resetScreen();
		domFactory(taskItem, storage.inbox.indexOf(taskItem));

		checkTaskComplete();
	}
}

function closeWindow(e) {
	let clickDetail = false;
	document.querySelectorAll(".taskDetails").forEach((item) => {
		if (item.contains(e.target)) clickDetail = true;
		// item.contains(e.target);
	});
	const outsideClick =
		!taskModal.contains(e.target) &&
		!addTaskBtn.contains(e.target) &&
		!clickDetail;

	// const condition = document
	// 	.querySelectorAll(".taskDetails")
	// 	.forEach((item) => item.contains(e.target));
	// console.log(condition);
	if (outsideClick) {
		resetScreen();
		document.removeEventListener("click", closeWindow);
	}
}
function newTaskModal() {
	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	sideBar.style.pointerEvents = "none";
	taskModal.style.display = "flex";
	document.getElementById("taskTitle").focus();
	document.addEventListener("click", closeWindow);
	// console.log(document.getElementById("taskTitle"));
}

function submitTaskData() {
	const submitTaskBtn = document.getElementById("createTaskBtn");
	submitTaskBtn.addEventListener("click", addToArray);
}

function createTask() {
	newTaskModal();
	submitTaskData();
}

export default (function task() {
	const current = (tab) => {
		currentTab = tab;
		// console.log(currentTab);
		return currentTab;
	};

	const create = () => addTaskBtn.addEventListener("click", createTask);

	function displayToDom(storageArray) {
		storageArray.forEach((item) => {
			domFactory(item, storage.inbox.indexOf(item));
		});
	}
	const clearTaskScreen = () => {
		let child = list.lastElementChild;

		while (child) {
			list.removeChild(child);
			child = list.lastElementChild;
		}
	};

	// displayToDom();
	return {
		create,
		displayToDom,
		clearTaskScreen,
		current,
	};
})();
