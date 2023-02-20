import { format } from "date-fns";
import task from "./task";
import deleteImage from "./icons/delete-forever.svg";
import editImage from "./icons/note-edit.svg";
import checkTaskComplete from "./completeTask";
import storage from "./storage";

// task dom code

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");
const sideBar = document.querySelector(".sideBar");
const editTaskBtn = document.getElementById("editTaskBtn");

const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDescription");
const taskDue = document.getElementById("taskDueDate");
const priorityRadios = document.getElementsByName("taskPriority");

function resetForms() {
	taskTitle.readOnly = false;
	taskTitle.value = "";

	taskDesc.readOnly = false;
	taskDesc.value = "";

	taskDue.readOnly = false;
	taskDue.value = "";

	priorityRadios.forEach((radios) => {
		const radio = radios;
		radio.disabled = false;
		radio.checked = false;
	});
}

function resetTaskScreen() {
	list.style.opacity = "1";
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	resetForms();

	taskModal.style.display = "none";
	editTaskBtn.style.display = "none";
	document.getElementById("createTaskBtn").style.display = "inline";

	const taskArray = Array.from(
		document.querySelectorAll(".listContainer__listItem")
	);
	taskArray.forEach((item) => (item.style.pointerEvents = "auto"));
}

function closeTaskModal(e) {
	let clickDetail = false;
	document.querySelectorAll(".listContainer__listItem").forEach((item) => {
		if (item.contains(e.target)) clickDetail = true;
		// item.contains(e.target);
	});
	const outsideClick =
		!taskModal.contains(e.target) &&
		!addTaskBtn.contains(e.target) &&
		!clickDetail;

	if (outsideClick) {
		resetTaskScreen();
		document.removeEventListener("click", closeTaskModal);
	}
}

function newTaskModal() {
	const taskArray = Array.from(
		document.querySelectorAll(".listContainer__listItem")
	);
	taskArray.forEach((item) => (item.style.pointerEvents = "none"));

	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	sideBar.style.pointerEvents = "none";

	// console.log(list);

	taskModal.style.display = "flex";
	taskTitle.focus();
	document.addEventListener("click", closeTaskModal);
	// console.log(document.getElementById("taskTitle"));
}

function detailEditModal() {
	const taskArray = Array.from(
		document.querySelectorAll(".listContainer__listItem")
	);
	taskArray.forEach((item) => (item.style.pointerEvents = "none"));
	document.getElementById("createTaskBtn").style.display = "none";

	sideBar.style.pointerEvents = "none";
	list.style.opacity = "0.7";
	taskModal.style.display = "flex";
	document.addEventListener("click", closeTaskModal);
}

function showDetails(taskDetails, taskObj) {
	taskDetails.addEventListener("click", () => {
		detailEditModal();

		taskTitle.readOnly = true;
		taskDesc.readOnly = true;
		taskDue.readOnly = true;

		taskTitle.value = taskObj.title;
		taskDesc.value = taskObj.description;
		taskDue.value = taskObj.dueDate;
		priorityRadios.forEach((radio) => {
			if (radio.value === taskObj.priority) radio.checked = true;
			else radio.disabled = true;
		});
	});
}

function domFactory(item, index) {
	const divItem = document.createElement("div");
	divItem.classList.add("listContainer__listItem");
	divItem.setAttribute("data-index", `${index}`);

	if (item.priority === "High") divItem.style.borderLeft = "8px solid #dc2626";
	if (item.priority === "Medium")
		divItem.style.borderLeft = "8px solid #fef08a";
	if (item.priority === "Low") divItem.style.borderLeft = "8px solid #22c55e";

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

	checkTaskComplete();

	divItem.append(inputCheck, para, taskDetails, dateContainer, editImg, delImg);
	list.append(divItem);

	// Adds delete task Functionality
	task.deleteTasks(delImg);

	// task Details
	// console.log(document.querySelectorAll(".taskDetails"));
	showDetails(taskDetails, storage.inbox[index]);

	// Edit task
	task.editTask(editImg, storage.inbox[index]);
}

// tabs dom manipulations

const projectModal = document.getElementById("createProjectModal");
const newProjectBtn = document.getElementById("newProject");

function resetProjectScreen() {
	list.style.opacity = "1";
	document.getElementById("projectTitle").value = "";
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	projectModal.style.display = "none";
}

function closeProjectModal(e) {
	const outsideClick =
		!projectModal.contains(e.target) && !newProjectBtn.contains(e.target);
	if (outsideClick) {
		resetProjectScreen();
		document.removeEventListener("click", closeProjectModal);
	}
}

function revealProjectModal() {
	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	// console.log(list);
	sideBar.style.pointerEvents = "none";
	projectModal.style.display = "flex";
	document.getElementById("projectTitle").focus();
	document.addEventListener("click", closeProjectModal);
}

function makeProjectActive(project) {
	const allProjects = document.querySelectorAll(".active");
	allProjects.forEach((item) => item.classList.remove("active"));
	// console.log(Array.from(allProjects));
	project.classList.add("active");
}

export default (function dom() {
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

	return {
		// for Task
		newTaskModal,
		resetTaskScreen,
		domFactory,
		detailEditModal,
		clearTaskScreen,
		displayToDom,

		// for tabs
		revealProjectModal,
		resetProjectScreen,
		makeProjectActive,
	};
})();
