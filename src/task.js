import taskComplete from "./completeTask";
import storage from "./storage";

class TaskCreator {
	constructor(title, currentTab) {
		this.title = title;
		this.tab = currentTab;
	}
}
let currentTab;

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");
const sideBar = document.querySelector(".sideBar");

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
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
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
// function cancelScreen() {
// 	document.querySelector(".container").addEventListener("click", (e) => {
// 		if (taskModal.contains(e.target)) {
// 			// Clicked in box
// 			console.log("inside");
// 		} else {
// 			// Clicked outside the box
// 			console.log("outside");
// 			// resetScreen();
// 		}
// 	});
// }
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
	document.addEventListener("click", closeWindow);
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
		currentTab = tab || "Inbox";
		// console.log(currentTab);
		return currentTab;
	};

	const create = () => addTaskBtn.addEventListener("click", createTask);

	function displayToDom(storageArray) {
		storageArray.forEach((item) => {
			domFactory(item);
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
