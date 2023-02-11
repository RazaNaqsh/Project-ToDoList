import taskComplete from "./completeTask";
import storage from "./storage";
import task from "./task";

function makeActive() {
	const inboxTab = document.getElementById("defaultTab");
	const allProjects = document.querySelectorAll(".active");
	allProjects.forEach((item) => item.classList.remove("active"));
	// console.log(Array.from(allProjects));
	inboxTab.classList.add("active");
}
export default function defaultTab() {
	makeActive();
	task.clearTaskScreen();
	task.current("Inbox");
	task.create();
	task.displayToDom(storage.inbox);
	taskComplete();
}
