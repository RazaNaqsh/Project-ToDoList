import taskComplete from "./completeTask";
import storage from "./storage";
import deleteImage from "./icons/delete-forever.svg";
import taskFunctions from "./task";

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

function deleteTasks(div) {
	function deleteFromStorage(e) {
		const index =
			e.target.parentElement.parentElement.getAttribute("data-index");
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

function domFactory(item, index) {
	const divItem = document.createElement("div");
	divItem.classList.add("listContainer__listItem");
	divItem.setAttribute("data-index", `${index}`);

	const inputCheck = document.createElement("input");
	inputCheck.type = "checkbox";
	inputCheck.classList.add("taskCheckbox");

	const para = document.createElement("p");
	para.textContent = `${item.title}`;

	const deleteEle = document.createElement("div");
	deleteEle.classList.add("delete");
	const delImg = new Image();
	delImg.src = deleteImage;
	delImg.classList.add("delIcon");

	// deleteEle.textContent = "X";

	divItem.append(inputCheck, para, deleteEle);
	deleteEle.append(delImg);
	list.append(divItem);

	// Adds delete task Functionality
	deleteTasks(deleteEle);
	// const domIndex = Array.from(list.children);
	// console.log(domIndex);
}

function resetScreen() {
	list.style.opacity = "1";
	document.getElementById("taskTitle").value = "";
	document.getElementById("taskDescription").value = "";
	document.getElementById("taskDueDate").value = "";
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	taskModal.style.display = "none";
}

function addToArray(e) {
	e.preventDefault();
	const taskTitle = document.getElementById("taskTitle").value;
	const taskDesc = document.getElementById("taskDescription").value;
	const taskDueDate = document.getElementById("taskDueDate").value;
	// const taskPriority = document.querySelector(
	// 	'input[name="taskPriority"]:checked'
	// ).value;
	let taskPriority = "";
	document.getElementsByName("taskPriority").forEach((radio) => {
		if (radio.checked) taskPriority = radio.value;
	});

	const isEmpty =
		taskTitle !== "" &&
		taskDesc !== "" &&
		taskDueDate !== "" &&
		taskPriority !== "";

	if (isEmpty) {
		const taskItem = new TaskCreator(
			taskTitle,
			currentTab,
			taskDesc,
			taskDueDate,
			taskPriority
		);
		storage.inbox.push(taskItem);
		console.log(storage.inbox);
		resetScreen();
		domFactory(taskItem, storage.inbox.indexOf(taskItem));

		taskComplete();
	}
}

function closeWindow(e) {
	const outsideClick =
		!taskModal.contains(e.target) && !addTaskBtn.contains(e.target);
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
