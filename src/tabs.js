import defaultTab from "./defaultTab";
import task from "./task";
import storage from "./storage";
import checkCompleteTask from "./completeTask";
import deleteImage from "./icons/delete-forever.svg";
import dom from "./dom";
import local from "./localStorage";

let projectArray = ["Family", "Personal", "Secret"];

const projectTab = document.getElementById("projects");

// const sideBar = document.querySelector(".sideBar");
// const list = document.querySelector("#lists");

const newProjectBtn = document.getElementById("newProject");
// const projectModal = document.getElementById("createProjectModal");

//  display project section and setup

function addLoadEvents(project, projectItem, delImg) {
	project.addEventListener("click", (e) => {
		const outsideDel = project.contains(e.target) && !delImg.contains(e.target);
		if (outsideDel) {
			task.current(projectItem);
			dom.clearTaskScreen();
			task.create();
			const projectPersonalArray = storage.inbox.filter(
				(item) => item.tab === projectItem
			);
			dom.displayToDom(projectPersonalArray);
			checkCompleteTask();
			dom.makeProjectActive(project);
		}
	});
}

function addDeleteEvent(delImg) {
	delImg.addEventListener("click", (e) => {
		// console.log("konnichiwa");

		const domArray = Array.from(document.querySelectorAll(".projectTab"));
		const domEleToRemove = domArray.indexOf(e.target.parentElement);
		projectTab.removeChild(e.target.parentElement);
		projectArray.splice(domEleToRemove, 1);

		local.updateLocalTabs(projectArray);
		// console.log(projectArray);

		// console.log(domEleToRemove);
	});
}

function projectFactory(projectItem, index) {
	const project = document.createElement("div");
	project.classList.add("sideBar__tab", "projectTab");
	project.setAttribute("data-index", `${index}`);
	projectTab.append(project);

	const projectName = document.createElement("h3");
	projectName.textContent = `${projectItem}`;

	// const deleteEle = document.createElement("div");
	// deleteEle.classList.add("delete");
	const delImg = new Image();
	delImg.src = deleteImage;
	delImg.classList.add("delIcon");
	project.append(projectName, delImg);
	addDeleteEvent(delImg);
	addLoadEvents(project, projectItem, delImg);
}

function displayProjects() {
	projectArray.forEach((projectItem, index) => {
		projectFactory(projectItem, index);
	});
}

//  Create Project section

function addToArray(e) {
	e.preventDefault();
	const projectTitle = document.getElementById("projectTitle").value;
	const isEmpty = projectTitle === "";
	if (!isEmpty) {
		const projectItem = projectTitle;
		projectArray.push(projectItem);
		dom.resetProjectScreen();
		projectFactory(projectItem, storage.inbox.indexOf(projectItem));
		// console.log(storage.inbox);
		local.updateLocalTabs(projectArray);
		checkCompleteTask();
	}
}
function submitProjectData() {
	const createProjectBtn = document.getElementById("createProjectBtn");
	createProjectBtn.addEventListener("click", addToArray);
}
function createNewProject() {
	dom.revealProjectModal();
	submitProjectData();
}

export default function tabs() {
	const inboxTab = document.getElementById("defaultTab");

	inboxTab.addEventListener("click", defaultTab);
	if (localStorage.getItem("tabs")) {
		// console.log("tabs are here");
		const localTabArray = JSON.parse(localStorage.getItem("tabs"));
		projectArray = localTabArray;
	}
	displayProjects();
	newProjectBtn.addEventListener("click", createNewProject);
}

export { projectArray };
