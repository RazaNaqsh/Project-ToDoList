import defaultTab from "./defaultTab";
import task from "./task";
import storage from "./storage";

const projectArray = ["Family", "Personal", "Secret"];

const inboxTab = document.getElementById("defaultTab");
const projectTab = document.getElementById("projects");

// function assignProjectSpace(projectItem) {
// 	task.currentTab = projectItem.textContent;
// 	// console.log(task.currentTab);
// 	// console.log(projectItem.textContent);
// }

// function tabCall() {
// 	// console.log(e.target.textContent);
// 	// console.log(task.current());
// 	// if (e.target.textContent !== task.current) {
// 	// 	task.current(e.target.textContent);
// 	// 	task.create();
// 	// 	console.log(task.current);
// 	// 	// e.target.parentElement.style.background = "dodgerBlue";
// 	// }

// 	if (task.current !== "Inbox") defaultTab();
// }

function projectFactory(projectItem) {
	const project = document.createElement("div");
	project.classList.add("sideBar__tab");
	projectTab.append(project);

	const projectName = document.createElement("h3");
	projectName.textContent = `${projectItem}`;
	project.append(projectName);

	// assignProjectSpace(project);
	project.addEventListener("click", () => {
		// task.currentTab = projectItem;
		task.current(projectItem);
		task.create();
		task.clearTaskScreen();
		const projectPersonalArray = storage.inbox.filter(
			(item) => item.tab === projectItem
		);
		task.displayToDom(projectPersonalArray);
	});
}

function displayProjects() {
	projectArray.forEach((projectItem) => {
		projectFactory(projectItem);
	});
}

export default function tabs() {
	inboxTab.addEventListener("click", defaultTab);
	displayProjects();
}
