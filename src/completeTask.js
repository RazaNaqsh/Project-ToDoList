function taskStatusCheck(e) {
	const siblingPara = e.target.nextSibling;
	const parentDiv = e.target.parentElement;

	const isCompleted = siblingPara.style.textDecoration === "line-through";

	siblingPara.style.textDecoration = isCompleted ? "none" : "line-through";
	parentDiv.style.opacity = isCompleted ? "1" : "0.6";
}

function handleEvent(taskItem) {
	taskItem.addEventListener("click", taskStatusCheck);
}

export default function taskComplete() {
	const taskCheckbox = document.querySelectorAll(".taskCheckbox");
	taskCheckbox.forEach(handleEvent);
}
