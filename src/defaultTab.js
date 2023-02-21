import taskComplete from "./completeTask";
import dom from "./dom";
import storage from "./storage";
// import tabs from "./tabs";
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
	dom.clearTaskScreen();
	task.current("Inbox");
	task.create();

	if (localStorage.getItem("todo")) {
		console.log("local HERE");
		// console.log(JSON.parse(localStorage.getItem("todo")));
		const localTodoArray = JSON.parse(localStorage.getItem("todo"));
		storage.inbox = localTodoArray;
	}

	dom.displayToDom(storage.inbox);
	taskComplete();
}
