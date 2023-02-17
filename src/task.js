// import { format } from "date-fns";clearTas
import checkTaskComplete from "./completeTask";
import storage from "./storage";
// import deleteImage from "./icons/delete-forever.svg";
// import editImage from "./icons/note-edit.svg";
// import taskFunctions from "./task";
import dom from "./dom";

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
const editTaskBtn = document.getElementById("editTaskBtn");

const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDescription");
const taskDue = document.getElementById("taskDueDate");
const priorityRadios = document.getElementsByName("taskPriority");

function deleteTasks(div) {
	function deleteFromStorage(e) {
		const index = e.target.parentElement.getAttribute("data-index");

		storage.inbox.splice(index, 1);

		dom.clearTaskScreen();
		if (currentTab === "Inbox") dom.displayToDom(storage.inbox);
		else
			dom.displayToDom(storage.inbox.filter((item) => item.tab === currentTab));
		// console.log(domEleToRemove);
		// console.log(storage.inbox);
		// console.log(index);
	}
	div.addEventListener("click", deleteFromStorage);
}

// function resetScreen() {
// 	list.style.opacity = "1";

// 	taskTitle.readOnly = false;
// 	taskTitle.value = "";

// 	taskDesc.readOnly = false;
// 	taskDesc.value = "";

// 	taskDue.readOnly = false;
// 	taskDue.value = "";

// 	priorityRadios.forEach((radios) => {
// 		const radio = radios;
// 		radio.disabled = false;
// 		radio.checked = false;
// 	});

// 	taskModal.style.display = "none";
// 	document.getElementById("createTaskBtn").style.display = "inline";
// 	editTaskBtn.style.display = "none";

// 	list.style.pointerEvents = "auto";
// 	sideBar.style.pointerEvents = "auto";
// 	const taskArray = Array.from(
// 		document.querySelectorAll(".listContainer__listItem")
// 	);
// 	taskArray.forEach((item) => (item.style.pointerEvents = "auto"));
// }

// function closeTaskModal(e) {
// 	let clickDetail = false;
// 	document.querySelectorAll(".listContainer__listItem").forEach((item) => {
// 		if (item.contains(e.target)) clickDetail = true;
// 		// item.contains(e.target);
// 	});
// 	const outsideClick =
// 		!taskModal.contains(e.target) &&
// 		!addTaskBtn.contains(e.target) &&
// 		!clickDetail;

// 	if (outsideClick) {
// 		dom.resetScreen();
// 		document.removeEventListener("click", closeTaskModal);
// 	}
// }

// function detailEditModal() {
// 	const taskArray = Array.from(
// 		document.querySelectorAll(".listContainer__listItem")
// 	);
// 	taskArray.forEach((item) => (item.style.pointerEvents = "none"));
// 	document.getElementById("createTaskBtn").style.display = "none";

// 	sideBar.style.pointerEvents = "none";
// 	list.style.opacity = "0.7";
// 	taskModal.style.display = "flex";
// 	document.addEventListener("click", closeWindow);
// }

function showDetails(taskDetails, taskObj) {
	taskDetails.addEventListener("click", () => {
		// newTaskModal();
		dom.detailEditModal();

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

		// document.addEventListener("click", closeWindow);
	});
}

function editTask(editBtn, taskObject) {
	const taskObj = taskObject;
	function updateTaskDetails(e) {
		e.preventDefault();

		taskObj.title = document.getElementById("taskTitle").value;
		taskObj.description = document.getElementById("taskDescription").value;
		taskObj.dueDate = document.getElementById("taskDueDate").value;
		priorityRadios.forEach((radio) => {
			if (radio.checked) taskObj.priority = radio.value;
		});
		// console.log(storage.inbox);

		dom.clearTaskScreen();
		if (currentTab === "Inbox") dom.displayToDom(storage.inbox);
		else {
			dom.displayToDom(storage.inbox.filter((item) => item.tab === currentTab));
		}
		checkTaskComplete();
		editTaskBtn.removeEventListener("click", updateTaskDetails);
		dom.resetScreen();
	}

	editBtn.addEventListener("click", () => {
		dom.detailEditModal();
		editTaskBtn.style.display = "inline";
		// console.log(taskObj.dueDate);

		taskTitle.value = taskObj.title;
		taskDesc.value = taskObj.description;
		taskDue.value = taskObj.dueDate;
		priorityRadios.forEach((radio) => {
			if (radio.value === taskObj.priority) radio.checked = true;
		});
		editTaskBtn.addEventListener("click", updateTaskDetails);
	});
}

// this is complete dom task
// function domFactory(item, index) {
// 	const divItem = document.createElement("div");
// 	divItem.classList.add("listContainer__listItem");
// 	divItem.setAttribute("data-index", `${index}`);

// 	if (item.priority === "High") divItem.style.borderLeft = "8px solid #ef4444";
// 	if (item.priority === "Medium")
// 		divItem.style.borderLeft = "8px solid #fdba74";
// 	if (item.priority === "Low") divItem.style.borderLeft = "8px solid #4ade80";

// 	const inputCheck = document.createElement("input");
// 	inputCheck.type = "checkbox";
// 	inputCheck.classList.add("taskCheckbox");

// 	const para = document.createElement("p");
// 	para.textContent = `${item.title}`;

// 	const taskDetails = document.createElement("div");
// 	taskDetails.classList.add("taskDetails");
// 	taskDetails.textContent = "Details";

// 	const dateContainer = document.createElement("div");
// 	dateContainer.classList.add("dateContainer");
// 	const date = document.createElement("p");
// 	const formattedDate = format(new Date(item.dueDate), "MMM dd, yyyy");
// 	date.textContent = `${formattedDate}`;
// 	dateContainer.append(date);

// 	const delImg = new Image();
// 	delImg.src = deleteImage;
// 	delImg.classList.add("delIcon");

// 	const editImg = new Image();
// 	editImg.src = editImage;
// 	editImg.classList.add("editIcon");

// 	checkTaskComplete();
// 	divItem.append(inputCheck, para, taskDetails, dateContainer, delImg, editImg);
// 	list.append(divItem);

// 	// Adds delete task Functionality
// 	deleteTasks(delImg);

// 	// task Details
// 	// console.log(document.querySelectorAll(".taskDetails"));
// 	showDetails(taskDetails, storage.inbox[index]);

// 	// Edit task
// 	editTask(editImg, storage.inbox[index]);
// }

function addToArray(e) {
	// e.preventDefault();
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
		// console.log(storage.inbox);
		dom.resetScreen();
		// window.localStorage.setItem("task", JSON.stringify(taskItem));
		// this is dom task
		dom.domFactory(taskItem, storage.inbox.indexOf(taskItem));

		checkTaskComplete();
	}
}

// for dom
// function newTaskModal() {
// 	list.style.opacity = "0.7";
// 	list.style.pointerEvents = "none";
// 	sideBar.style.pointerEvents = "none";
// 	taskModal.style.display = "flex";
// 	document.getElementById("taskTitle").focus();
// 	document.addEventListener("click", closeWindow);
// 	// console.log(document.getElementById("taskTitle"));
// }

function submitTaskData() {
	const submitTaskBtn = document.getElementById("createTaskBtn");
	submitTaskBtn.addEventListener("click", addToArray);
}

function createTask() {
	dom.newTaskModal();
	submitTaskData();
}

export default (function task() {
	const current = (tab) => {
		currentTab = tab;
		document.getElementById("headerTitle").textContent = currentTab;
		// console.log(currentTab);
		return currentTab;
	};

	const create = () => addTaskBtn.addEventListener("click", createTask);

	//  for dom
	// function displayToDom(storageArray) {
	// 	storageArray.forEach((item) => {
	// 		// localStorage.setItem(item, storage.inbox.indexOf(item));
	// 		// domFactory(JSON.parse(localStorage.getItem()))
	// 		dom.domFactory(item, storage.inbox.indexOf(item));
	// 	});
	// }

	// for dom
	// const clearTaskScreen = () => {
	// 	let child = list.lastElementChild;

	// 	while (child) {
	// 		list.removeChild(child);
	// 		child = list.lastElementChild;
	// 	}
	// };

	return {
		create,
		// displayToDom,
		// clearTaskScreen,
		current,
		showDetails,
		editTask,
		deleteTasks,
		// closeWindow,
	};
})();
