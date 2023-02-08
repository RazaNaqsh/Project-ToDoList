import defaultTab from "./defaultTab";
import task from "./task";

const projectArray = ["Family", "Personal", "Secret"];

const inboxTab = document.getElementById("defaultTab");
const projectTab = document.getElementById("projects");

function displayProjects() {
	projectArray.forEach((projectItem) => {
		const project = document.createElement("div");
		project.classList.add("sideBar__tab");
		projectTab.append(project);

		const projectName = document.createElement("h3");
		projectName.textContent = `${projectItem}`;
		project.append(projectName);
	});
}

function tabCall() {
	if (task.currentTab !== "default") defaultTab();
}

export default function tabs() {
	inboxTab.addEventListener("click", tabCall);
	displayProjects();
}
