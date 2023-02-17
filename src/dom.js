import { format } from "date-fns";
import task from "./task";
import deleteImage from "./icons/delete-forever.svg";
import editImage from "./icons/note-edit.svg";
import checkTaskComplete from "./completeTask";
import storage from "./storage";

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");
const sideBar = document.querySelector(".sideBar");
const editTaskBtn = document.getElementById("editTaskBtn");

const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDescription");
const taskDue = document.getElementById("taskDueDate");
const priorityRadios = document.getElementsByName("taskPriority");

function resetScreen() {
	list.style.opacity = "1";

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

	taskModal.style.display = "none";
	document.getElementById("createTaskBtn").style.display = "inline";
	editTaskBtn.style.display = "none";

	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	const taskArray = Array.from(
		document.querySelectorAll(".listContainer__listItem")
	);
	taskArray.forEach((item) => (item.style.pointerEvents = "auto"));
}

function newTaskModal() {
	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	sideBar.style.pointerEvents = "none";
	taskModal.style.display = "flex";
	taskTitle.focus();
	document.addEventListener("click", task.closeWindow);
	// console.log(document.getElementById("taskTitle"));
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

	checkTaskComplete();
	divItem.append(inputCheck, para, taskDetails, dateContainer, delImg, editImg);
	list.append(divItem);

	// Adds delete task Functionality
	task.deleteTasks(delImg);

	// task Details
	// console.log(document.querySelectorAll(".taskDetails"));
	task.showDetails(taskDetails, storage.inbox[index]);

	// Edit task
	task.editTask(editImg, storage.inbox[index]);
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
	document.addEventListener("click", task.closeWindow);
}

export default (function dom() {
	return {
		newTaskModal,
		resetScreen,
		domFactory,
		detailEditModal,
	};
})();
