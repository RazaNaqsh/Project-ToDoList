import storage from "./storage";

function taskStatusHandler(e) {
	// const siblingPara = e.target.nextSibling;
	const parentDiv = e.target.parentElement;

	const taskIndex = e.target.parentElement.getAttribute("data-index");
	// console.log(taskIndex);
	// storage.inbox[taskIndex].status === "Incomplete"
	if (e.target.checked === true) {
		storage.inbox[taskIndex].status = "Complete";
		parentDiv.style.textDecoration = "line-through";
		parentDiv.style.opacity = "0.6";
	} else {
		storage.inbox[taskIndex].status = "Incomplete";
		parentDiv.style.textDecoration = "none";
		parentDiv.style.opacity = 1;
	}

	// console.log(storage.inbox);

	// const isCompleted = siblingPara.style.textDecoration === "line-through";

	// siblingPara.style.textDecoration = isCompleted ? "none" : "line-through";
	// parentDiv.style.opacity = isCompleted ? "1" : "0.6";
}

function handleEvent(taskItem) {
	taskItem.addEventListener("click", taskStatusHandler);
	// taskItem.addEventListener("click", transferCompletedTask);
}

function taskCompleteCheck() {
	const listItems = Array.from(
		document.querySelectorAll(".listContainer__listItem")
	);
	// console.log(listItems);
	listItems.forEach((taskItem) => {
		const task = taskItem;
		const taskIndex = task.getAttribute("data-index");
		// console.log(storage.inbox[taskIndex]);
		if (storage.inbox[taskIndex].status === "Complete") {
			task.firstChild.checked = true;
			task.style.textDecoration = "line-through";
			task.style.opacity = "0.6";
		} else {
			task.firstChild.checked = false;
			task.style.textDecoration = "none";
			task.style.opacity = 1;
		}
	});
	// const listIndex = listItems.getAttribute("data-")
}

export default function taskComplete() {
	taskCompleteCheck();
	const taskCheckbox = document.querySelectorAll(".taskCheckbox");
	taskCheckbox.forEach(handleEvent);
}
