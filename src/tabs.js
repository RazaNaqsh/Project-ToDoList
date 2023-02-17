import defaultTab from "./defaultTab";
import task from "./task";
import storage from "./storage";
import taskComplete from "./completeTask";
import deleteImage from "./icons/delete-forever.svg";

const projectArray = ["Family", "Personal", "Secret"];

const projectTab = document.getElementById("projects");

const sideBar = document.querySelector(".sideBar");
const list = document.querySelector("#lists");

const newProjectBtn = document.getElementById("newProject");
const projectModal = document.getElementById("createProjectModal");

//  display project section and setup
function makeProjectActive(project) {
	const allProjects = document.querySelectorAll(".active");
	allProjects.forEach((item) => item.classList.remove("active"));
	// console.log(Array.from(allProjects));
	project.classList.add("active");
}

function addLoadEvents(project, projectItem, delImg) {
	project.addEventListener("click", (e) => {
		const outsideDel = project.contains(e.target) && !delImg.contains(e.target);
		if (outsideDel) {
			task.current(projectItem);
			task.clearTaskScreen();
			task.create();
			const projectPersonalArray = storage.inbox.filter(
				(item) => item.tab === projectItem
			);
			task.displayToDom(projectPersonalArray);
			taskComplete();
			makeProjectActive(project);
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
		console.log(projectArray);

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
function resetProjectScreen() {
	list.style.opacity = "1";
	document.getElementById("projectTitle").value = "";
	list.style.pointerEvents = "auto";
	sideBar.style.pointerEvents = "auto";
	projectModal.style.display = "none";
}

function closeWindow(e) {
	const outsideClick =
		!projectModal.contains(e.target) && !newProjectBtn.contains(e.target);
	if (outsideClick) {
		resetProjectScreen();
		document.removeEventListener("click", closeWindow);
	}
}

function createProjectModal() {
	list.style.opacity = "0.7";
	list.style.pointerEvents = "none";
	sideBar.style.pointerEvents = "none";
	projectModal.style.display = "flex";
	document.getElementById("projectTitle").focus();
	document.addEventListener("click", closeWindow);
}

function addToArray(e) {
	e.preventDefault();
	const projectTitle = document.getElementById("projectTitle").value;
	const isEmpty = projectTitle === "";
	if (!isEmpty) {
		const projectItem = projectTitle;
		projectArray.push(projectItem);
		resetProjectScreen();
		projectFactory(projectItem, storage.inbox.indexOf(projectItem));
		console.log(storage.inbox);
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

	inboxTab.addEventListener("click", defaultTab);
	displayProjects();
	newProjectBtn.addEventListener("click", createNewProject);
}
