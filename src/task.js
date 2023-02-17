import checkTaskComplete from "./completeTask";
import storage from "./storage";
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

// const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
// const list = document.querySelector("#lists");
// const sideBar = document.querySelector(".sideBar");
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

function showDetails(taskDetails, taskObj) {
	taskDetails.addEventListener("click", () => {
		dom.detailEditModal();

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

function addToArray(e) {
	// e.preventDefault();
	const title = taskTitle.value;
	const desc = taskDesc.value;
	const taskDueDate = taskDue.value;

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

	return {
		create,

		current,
		showDetails,
		editTask,
		deleteTasks,
	};
})();
