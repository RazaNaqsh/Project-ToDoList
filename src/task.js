import taskComplete from "./completeTask";
import storage from "./storage";

class TaskCreator {
	constructor(title, currentTab) {
		this.title = title;
		this.tab = currentTab;
	}
}
let currentTab = "default";

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
		const taskItem = new TaskCreator(taskTitle, currentTab);
		storage.inbox.push(taskItem);
		// console.log(storage.inbox);
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

export default (function task(tab) {
	currentTab = tab || "default";

	const create = () => addTaskBtn.addEventListener("click", createTask);

	function displayToDom(storageArray) {
		storageArray.forEach((item) => {
			domFactory(item);
		});
	}

	// displayToDom();
	return {
		create,
		displayToDom,
		currentTab,
	};
})();
