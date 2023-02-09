import defaultTab from "./defaultTab";
import task from "./task";
import storage from "./storage";
import taskComplete from "./completeTask";

const projectArray = ["Family", "Personal", "Secret"];

const projectTab = document.getElementById("projects");

const sideBar = document.querySelector(".sideBar");
const list = document.querySelector("#lists");

const projectModal = document.getElementById("createProjectModal");

function addEvent(project, projectItem) {
	project.addEventListener("click", () => {
		task.current(projectItem);
		task.clearTaskScreen();
		task.create();
		const projectPersonalArray = storage.inbox.filter(
			(item) => item.tab === projectItem
		);
		task.displayToDom(projectPersonalArray);
		taskComplete();
	});
}

function projectFactory(projectItem) {
	const project = document.createElement("div");
	project.classList.add("sideBar__tab");
	projectTab.append(project);

	const projectName = document.createElement("h3");
	projectName.textContent = `${projectItem}`;
	project.append(projectName);

	addEvent(project, projectItem);
}

function displayProjects() {
	projectArray.forEach((projectItem) => {
		projectFactory(projectItem);
	});
}
function createProjectModal() {
	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	sideBar.style.pointerEvents = "none";
	projectModal.style.display = "flex";
}
function resetScreen() {
	list.style.opacity = "1";
	document.getElementById("projectTitle").value = "";
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	projectModal.style.display = "none";
}

function addToArray(e) {
	e.preventDefault();
	const projectTitle = document.getElementById("projectTitle").value;
	const isEmpty = projectTitle === "";
	if (!isEmpty) {
		const projectItem = projectTitle;
		projectArray.push(projectItem);
		resetScreen();
		projectFactory(projectItem);
		taskComplete();
	}
}
function submitProjectData() {
	const createProjectBtn = document.getElementById("createProjectBtn");
	createProjectBtn.addEventListener("click", addToArray);
}
function createNewProject() {
	createProjectModal();
	submitProjectData();
}

export default function tabs() {
	const inboxTab = document.getElementById("defaultTab");
	const newProjectBtn = document.getElementById("newProject");
	inboxTab.addEventListener("click", defaultTab);
	displayProjects();
	newProjectBtn.addEventListener("click", createNewProject);
}
