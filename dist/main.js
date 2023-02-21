/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/completeTask.js":
/*!*****************************!*\
  !*** ./src/completeTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskComplete)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


function taskStatusHandler(e) {
  // const siblingPara = e.target.nextSibling;
  const parentDiv = e.target.parentElement;
  const taskIndex = e.target.parentElement.getAttribute("data-index");
  // console.log(taskIndex);
  // storage.inbox[taskIndex].status === "Incomplete"
  if (e.target.checked === true) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox[taskIndex].status = "Complete";
    parentDiv.style.textDecoration = "line-through";
    parentDiv.style.opacity = "0.6";
  } else {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox[taskIndex].status = "Incomplete";
    parentDiv.style.textDecoration = "none";
    parentDiv.style.opacity = 1;
  }
  _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].updateLocalTodo(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);
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
  const listItems = Array.from(document.querySelectorAll(".listContainer__listItem"));
  // console.log(listItems);
  listItems.forEach(taskItem => {
    const task = taskItem;
    const taskIndex = task.getAttribute("data-index");
    // console.log(storage.inbox[taskIndex]);
    if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox[taskIndex].status === "Complete") {
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

function taskComplete() {
  taskCompleteCheck();
  const taskCheckbox = document.querySelectorAll(".taskCheckbox");
  taskCheckbox.forEach(handleEvent);
}

/***/ }),

/***/ "./src/defaultTab.js":
/*!***************************!*\
  !*** ./src/defaultTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultTab)
/* harmony export */ });
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");



// import tabs from "./tabs";

function makeActive() {
  const inboxTab = document.getElementById("defaultTab");
  const allProjects = document.querySelectorAll(".active");
  allProjects.forEach(item => item.classList.remove("active"));
  // console.log(Array.from(allProjects));
  inboxTab.classList.add("active");
}
function defaultTab() {
  makeActive();
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearTaskScreen();
  _task__WEBPACK_IMPORTED_MODULE_3__["default"].current("Inbox");
  _task__WEBPACK_IMPORTED_MODULE_3__["default"].create();
  if (localStorage.getItem("todo")) {
    console.log("local HERE");
    // console.log(JSON.parse(localStorage.getItem("todo")));
    const localTodoArray = JSON.parse(localStorage.getItem("todo"));
    _storage__WEBPACK_IMPORTED_MODULE_2__["default"].inbox = localTodoArray;
  }
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayToDom(_storage__WEBPACK_IMPORTED_MODULE_2__["default"].inbox);
  (0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _icons_delete_forever_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/delete-forever.svg */ "./src/icons/delete-forever.svg");
/* harmony import */ var _icons_note_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/note-edit.svg */ "./src/icons/note-edit.svg");
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







// task dom code

const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");
const sideBar = document.querySelector(".sideBar");
const editTaskBtn = document.getElementById("editTaskBtn");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDescription");
const taskDue = document.getElementById("taskDueDate");
const priorityRadios = document.getElementsByName("taskPriority");
function resetForms() {
  taskTitle.readOnly = false;
  taskTitle.value = "";
  taskDesc.readOnly = false;
  taskDesc.value = "";
  taskDue.readOnly = false;
  taskDue.value = "";
  priorityRadios.forEach(radios => {
    const radio = radios;
    radio.disabled = false;
    radio.checked = false;
  });
}
function resetTaskScreen() {
  list.style.opacity = "1";
  list.style.pointerEvents = "auto";
  sideBar.style.pointerEvents = "auto";
  resetForms();
  taskModal.style.display = "none";
  editTaskBtn.style.display = "none";
  document.getElementById("createTaskBtn").style.display = "inline";
  const taskArray = Array.from(document.querySelectorAll(".listContainer__listItem"));
  taskArray.forEach(item => item.style.pointerEvents = "auto");
}
function closeTaskModal(e) {
  let clickDetail = false;
  document.querySelectorAll(".listContainer__listItem").forEach(item => {
    if (item.contains(e.target)) clickDetail = true;
    // item.contains(e.target);
  });

  const outsideClick = !taskModal.contains(e.target) && !addTaskBtn.contains(e.target) && !clickDetail;
  if (outsideClick) {
    resetTaskScreen();
    document.removeEventListener("click", closeTaskModal);
  }
}
function newTaskModal() {
  const taskArray = Array.from(document.querySelectorAll(".listContainer__listItem"));
  taskArray.forEach(item => item.style.pointerEvents = "none");
  list.style.opacity = "0.7";
  list.style.pointerEvents = "none";
  sideBar.style.pointerEvents = "none";

  // console.log(list);

  taskModal.style.display = "flex";
  taskTitle.focus();
  document.addEventListener("click", closeTaskModal);
  // console.log(document.getElementById("taskTitle"));
}

function detailEditModal() {
  const taskArray = Array.from(document.querySelectorAll(".listContainer__listItem"));
  taskArray.forEach(item => item.style.pointerEvents = "none");
  document.getElementById("createTaskBtn").style.display = "none";
  sideBar.style.pointerEvents = "none";
  list.style.opacity = "0.7";
  taskModal.style.display = "flex";
  document.addEventListener("click", closeTaskModal);
}
function showDetails(taskDetails, taskObj) {
  taskDetails.addEventListener("click", () => {
    detailEditModal();
    taskTitle.readOnly = true;
    taskDesc.readOnly = true;
    taskDue.readOnly = true;
    taskTitle.value = taskObj.title;
    taskDesc.value = taskObj.description;
    taskDue.value = taskObj.dueDate;
    priorityRadios.forEach(radio => {
      if (radio.value === taskObj.priority) radio.checked = true;else radio.disabled = true;
    });
  });
}
function domFactory(item, index) {
  const divItem = document.createElement("div");
  divItem.classList.add("listContainer__listItem");
  divItem.setAttribute("data-index", `${index}`);
  if (item.priority === "High") divItem.style.borderLeft = "8px solid #dc2626";
  if (item.priority === "Medium") divItem.style.borderLeft = "8px solid #fef08a";
  if (item.priority === "Low") divItem.style.borderLeft = "8px solid #22c55e";
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.classList.add("taskCheckbox");
  const para = document.createElement("p");
  para.textContent = `${item.title}`;
  const taskDetails = document.createElement("div");
  taskDetails.classList.add("taskDetails");
  taskDetails.textContent = "Details";
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("dateContainer");
  const date = document.createElement("p");
  const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(item.dueDate), "MMM dd, yyyy");
  date.textContent = `${formattedDate}`;
  dateContainer.append(date);
  const delImg = new Image();
  delImg.src = _icons_delete_forever_svg__WEBPACK_IMPORTED_MODULE_1__;
  delImg.classList.add("delIcon");
  const editImg = new Image();
  editImg.src = _icons_note_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
  editImg.classList.add("editIcon");
  (0,_completeTask__WEBPACK_IMPORTED_MODULE_3__["default"])();
  divItem.append(inputCheck, para, taskDetails, dateContainer, editImg, delImg);
  list.append(divItem);

  // Adds delete task Functionality
  _task__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTasks(delImg);

  // task Details
  // console.log(document.querySelectorAll(".taskDetails"));
  showDetails(taskDetails, _storage__WEBPACK_IMPORTED_MODULE_4__["default"].inbox[index]);

  // Edit task
  _task__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(editImg, _storage__WEBPACK_IMPORTED_MODULE_4__["default"].inbox[index]);
}

// tabs dom manipulations

const projectModal = document.getElementById("createProjectModal");
const newProjectBtn = document.getElementById("newProject");
function resetProjectScreen() {
  list.style.opacity = "1";
  document.getElementById("projectTitle").value = "";
  list.style.pointerEvents = "auto";
  sideBar.style.pointerEvents = "auto";
  projectModal.style.display = "none";
}
function closeProjectModal(e) {
  const outsideClick = !projectModal.contains(e.target) && !newProjectBtn.contains(e.target);
  if (outsideClick) {
    resetProjectScreen();
    document.removeEventListener("click", closeProjectModal);
  }
}
function revealProjectModal() {
  list.style.opacity = "0.7";
  list.style.pointerEvents = "none";
  // console.log(list);
  sideBar.style.pointerEvents = "none";
  projectModal.style.display = "flex";
  document.getElementById("projectTitle").focus();
  document.addEventListener("click", closeProjectModal);
}
function makeProjectActive(project) {
  const allProjects = document.querySelectorAll(".active");
  allProjects.forEach(item => item.classList.remove("active"));
  // console.log(Array.from(allProjects));
  project.classList.add("active");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function dom() {
  function displayToDom(storageArray) {
    storageArray.forEach(item => {
      domFactory(item, _storage__WEBPACK_IMPORTED_MODULE_4__["default"].inbox.indexOf(item));
    });
    console.log(_storage__WEBPACK_IMPORTED_MODULE_4__["default"].inbox);
    // storageArray.forEach((item) => {
    // 	domFactory(item, storage.inbox.indexOf(item));
    // });
  }

  const clearTaskScreen = () => {
    let child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }
  };
  return {
    // for Task
    newTaskModal,
    resetTaskScreen,
    domFactory,
    detailEditModal,
    clearTaskScreen,
    displayToDom,
    // for tabs
    revealProjectModal,
    resetProjectScreen,
    makeProjectActive
  };
})());

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateLocalTodo(todo) {
  localStorage.setItem("todo", JSON.stringify(todo));
}
function updateLocalTabs(tabs) {
  localStorage.setItem("tabs", JSON.stringify(tabs));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function local() {
  return {
    updateLocalTodo,
    updateLocalTabs
  };
})());

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = (() => {
  const inbox = [{
    title: "Test Task 1",
    tab: "Inbox",
    description: "This is test task 1",
    dueDate: "2023-02-16",
    priority: "High",
    status: "Complete"
  }, {
    title: "Test Task 2",
    tab: "Inbox",
    description: "This is test task 2",
    dueDate: "2023-02-17",
    priority: "Medium",
    status: "Incomplete"
  }, {
    title: "Test Fam 1",
    tab: "Family",
    description: "This is Fam task 1",
    dueDate: "2023-02-19",
    priority: "Medium",
    status: "Incomplete"
  }, {
    title: "Test Pers 1",
    tab: "Personal",
    description: "This is Pers task 1",
    dueDate: "2023-02-21",
    priority: "Medium",
    status: "Incomplete"
  }, {
    title: "Test Secret 1",
    tab: "Secret",
    description: "This is Secret task 1",
    dueDate: "2023-02-22",
    priority: "Low",
    status: "Incomplete"
  }];
  return {
    inbox
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabs),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _defaultTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultTab */ "./src/defaultTab.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");
/* harmony import */ var _icons_delete_forever_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/delete-forever.svg */ "./src/icons/delete-forever.svg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");







let projectArray = ["Family", "Personal", "Secret"];
const projectTab = document.getElementById("projects");

// const sideBar = document.querySelector(".sideBar");
// const list = document.querySelector("#lists");

const newProjectBtn = document.getElementById("newProject");
// const projectModal = document.getElementById("createProjectModal");

//  display project section and setup

function addLoadEvents(project, projectItem, delImg) {
  project.addEventListener("click", e => {
    const outsideDel = project.contains(e.target) && !delImg.contains(e.target);
    if (outsideDel) {
      _task__WEBPACK_IMPORTED_MODULE_1__["default"].current(projectItem);
      _dom__WEBPACK_IMPORTED_MODULE_5__["default"].clearTaskScreen();
      _task__WEBPACK_IMPORTED_MODULE_1__["default"].create();
      const projectPersonalArray = _storage__WEBPACK_IMPORTED_MODULE_2__["default"].inbox.filter(item => item.tab === projectItem);
      _dom__WEBPACK_IMPORTED_MODULE_5__["default"].displayToDom(projectPersonalArray);
      (0,_completeTask__WEBPACK_IMPORTED_MODULE_3__["default"])();
      _dom__WEBPACK_IMPORTED_MODULE_5__["default"].makeProjectActive(project);
    }
  });
}
function addDeleteEvent(delImg) {
  delImg.addEventListener("click", e => {
    // console.log("konnichiwa");

    const domArray = Array.from(document.querySelectorAll(".projectTab"));
    const domEleToRemove = domArray.indexOf(e.target.parentElement);
    projectTab.removeChild(e.target.parentElement);
    projectArray.splice(domEleToRemove, 1);
    _localStorage__WEBPACK_IMPORTED_MODULE_6__["default"].updateLocalTabs(projectArray);
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
  delImg.src = _icons_delete_forever_svg__WEBPACK_IMPORTED_MODULE_4__;
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
    _dom__WEBPACK_IMPORTED_MODULE_5__["default"].resetProjectScreen();
    projectFactory(projectItem, _storage__WEBPACK_IMPORTED_MODULE_2__["default"].inbox.indexOf(projectItem));
    // console.log(storage.inbox);
    _localStorage__WEBPACK_IMPORTED_MODULE_6__["default"].updateLocalTabs(projectArray);
    (0,_completeTask__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
}
function submitProjectData() {
  const createProjectBtn = document.getElementById("createProjectBtn");
  createProjectBtn.addEventListener("click", addToArray);
}
function createNewProject() {
  _dom__WEBPACK_IMPORTED_MODULE_5__["default"].revealProjectModal();
  submitProjectData();
}
function tabs() {
  const inboxTab = document.getElementById("defaultTab");
  inboxTab.addEventListener("click", _defaultTab__WEBPACK_IMPORTED_MODULE_0__["default"]);
  if (localStorage.getItem("tabs")) {
    // console.log("tabs are here");
    const localTabArray = JSON.parse(localStorage.getItem("tabs"));
    projectArray = localTabArray;
  }
  displayProjects();
  newProjectBtn.addEventListener("click", createNewProject);
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completeTask */ "./src/completeTask.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");





class TaskCreator {
  constructor(title, currentTab, desc, dueDate, priority) {
    this.title = title;
    this.tab = currentTab;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = "Incomplete";
  }
}
let currentTab;

// const taskModal = document.getElementById("createTaskModal");
const addTaskBtn = document.getElementById("addTask");
const list = document.querySelector("#lists");
const sideBar = document.querySelector(".sideBar");
const editTaskBtn = document.getElementById("editTaskBtn");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDescription");
const taskDue = document.getElementById("taskDueDate");
const priorityRadios = document.getElementsByName("taskPriority");
function deleteTasks(div) {
  function deleteFromStorage(e) {
    const index = e.target.parentElement.getAttribute("data-index");
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox.splice(index, 1);
    _dom__WEBPACK_IMPORTED_MODULE_2__["default"].clearTaskScreen();
    if (currentTab === "Inbox") _dom__WEBPACK_IMPORTED_MODULE_2__["default"].displayToDom(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);else _dom__WEBPACK_IMPORTED_MODULE_2__["default"].displayToDom(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox.filter(item => item.tab === currentTab));
    // console.log(domEleToRemove);
    // console.log(storage.inbox);
    // console.log(index);
    _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].updateLocalTodo(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);
  }
  div.addEventListener("click", deleteFromStorage);
}
function editTask(editBtn, taskObject) {
  const taskObj = taskObject;
  function updateTaskDetails(e) {
    e.preventDefault();
    taskObj.title = document.getElementById("taskTitle").value;
    taskObj.description = document.getElementById("taskDescription").value;
    taskObj.dueDate = document.getElementById("taskDueDate").value;
    priorityRadios.forEach(radio => {
      if (radio.checked) taskObj.priority = radio.value;
    });
    // console.log(storage.inbox);

    _dom__WEBPACK_IMPORTED_MODULE_2__["default"].clearTaskScreen();
    if (currentTab === "Inbox") _dom__WEBPACK_IMPORTED_MODULE_2__["default"].displayToDom(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);else {
      _dom__WEBPACK_IMPORTED_MODULE_2__["default"].displayToDom(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox.filter(item => item.tab === currentTab));
    }
    _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].updateLocalTodo(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);
    (0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
    editTaskBtn.removeEventListener("click", updateTaskDetails);
    _dom__WEBPACK_IMPORTED_MODULE_2__["default"].resetTaskScreen();
  }
  editBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_2__["default"].detailEditModal();
    editTaskBtn.style.display = "inline";
    // console.log(taskObj.dueDate);

    taskTitle.value = taskObj.title;
    taskDesc.value = taskObj.description;
    taskDue.value = taskObj.dueDate;
    priorityRadios.forEach(radio => {
      if (radio.value === taskObj.priority) radio.checked = true;
    });
    editTaskBtn.addEventListener("click", updateTaskDetails);
  });
}
function addToArray(e) {
  e.preventDefault();
  const title = taskTitle.value;
  const desc = taskDesc.value;
  const taskDueDate = taskDue.value;
  let taskPriority = "";
  priorityRadios.forEach(radio => {
    if (radio.checked) taskPriority = radio.value;
  });
  const isEmpty = title !== "" && desc !== "" && taskDueDate !== "" && taskPriority !== "";
  if (isEmpty) {
    const taskItem = new TaskCreator(title, currentTab, desc, taskDueDate, taskPriority);
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox.push(taskItem);
    _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].updateLocalTodo(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);
    console.log(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox);
    _dom__WEBPACK_IMPORTED_MODULE_2__["default"].resetTaskScreen();

    // localStorage.setItem(
    // 	storage.inbox.indexOf(taskItem),
    // 	JSON.stringify(taskItem)
    // );

    _dom__WEBPACK_IMPORTED_MODULE_2__["default"].domFactory(taskItem, _storage__WEBPACK_IMPORTED_MODULE_1__["default"].inbox.indexOf(taskItem));
    (0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}
function submitTaskData() {
  const submitTaskBtn = document.getElementById("createTaskBtn");
  submitTaskBtn.addEventListener("click", addToArray);
}
function createTask() {
  _dom__WEBPACK_IMPORTED_MODULE_2__["default"].newTaskModal();
  submitTaskData();
}
function makeProjectActive(project) {
  const allProjects = document.querySelectorAll(".active");
  allProjects.forEach(item => item.classList.remove("active"));
  // console.log(Array.from(allProjects));
  project.classList.add("active");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function task() {
  const current = tab => {
    currentTab = tab;
    document.getElementById("headerTitle").textContent = currentTab;
    // console.log(currentTab);
    return currentTab;
  };
  const create = () => addTaskBtn.addEventListener("click", createTask);
  // local.updateLocalTodo(storage.inbox);
  // local.updateLocalTabs(projectArray);
  return {
    // for tasks
    create,
    current,
    editTask,
    deleteTasks,
    makeProjectActive
  };
})());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: hsl(235deg, 21%, 11%);\n  font-family: \"Josefin Sans\", sans-serif;\n  overflow: hidden;\n  color: hsl(236deg, 33%, 92%);\n}\n\ninput {\n  accent-color: hsl(234deg, 39%, 85%);\n}\n\ninput[type=text],\ntextarea {\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  padding: 1rem;\n  margin-top: 1rem;\n  width: 100%;\n  border: none;\n  transition: all 450ms ease-in-out;\n}\ninput[type=text]:focus,\ntextarea:focus {\n  outline: 2px solid hsl(220deg, 98%, 61%);\n}\n\ntextarea {\n  resize: none;\n}\n\ninput[type=radio] {\n  margin-right: 1rem;\n  accent-color: hsl(235deg, 21%, 11%);\n}\n\nbutton {\n  margin-top: 1.5rem;\n  margin-inline: auto;\n  width: fit-content;\n  padding: 0.6rem 1rem;\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all 100ms ease-in-out;\n}\nbutton:hover {\n  transform: scale(0.95);\n}\nbutton:active {\n  transform: scale(0.98);\n}\n\n.copyrightText {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: hsl(234deg, 39%, 85%);\n}\n\n.header {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  position: relative;\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: flex;\n  animation: slide-down 450ms ease-in-out 1 normal;\n  min-height: 17vh;\n}\n@media (max-width: 900px) {\n  .header {\n    min-height: 12vh;\n  }\n  .header::before {\n    position: absolute;\n    content: \"\";\n  }\n}\n.header__title {\n  align-self: flex-end;\n  margin-left: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n  font-weight: 700;\n  color: hsl(234deg, 39%, 85%);\n  transition: all 250ms ease-in-out;\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.sideBar {\n  display: flex;\n  flex-direction: column;\n  background-color: hsl(235deg, 24%, 19%);\n  gap: 1rem;\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border-right: 1px solid hsl(236deg, 33%, 92%);\n  padding: 1rem 1rem 0 1rem;\n  animation: slide-in 450ms ease-in-out 1 normal;\n}\n@media (max-width: 1160px) {\n  .sideBar {\n    gap: 0.5rem;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 900px) {\n  .sideBar {\n    display: none;\n  }\n}\n.sideBar .responsiveSide {\n  position: fixed;\n  z-index: 2;\n  height: 83vh;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.sideBar .active {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__title {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: hsl(234deg, 39%, 85%);\n  letter-spacing: 2px;\n  font-weight: 900;\n  font-size: 2rem;\n}\n.sideBar__upper {\n  margin-top: 1rem;\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__tab {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.85rem 0.3rem;\n  padding-right: 1rem;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n  animation: slide-in 350ms ease-in-out 1 normal;\n}\n.sideBar__tab:hover {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__tab .delIcon {\n  height: 25px;\n  transition: inherit;\n}\n.sideBar__tab .delIcon:hover {\n  opacity: 0.8;\n}\n.sideBar__project {\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n  max-height: 15rem;\n  overflow: auto;\n  transition: all 200ms ease-in-out;\n  user-select: none;\n}\n.sideBar__project::-webkit-scrollbar {\n  width: 7px;\n}\n.sideBar__project::-webkit-scrollbar-track {\n  border-radius: 5px;\n  background: hsl(234deg, 39%, 85%);\n}\n.sideBar__project::-webkit-scrollbar-thumb {\n  background-color: hsl(235deg, 21%, 11%);\n  border-radius: 5px;\n}\n.sideBar__addProject {\n  cursor: pointer;\n  margin: 1.5rem 0 0.5rem;\n  transition: all 200ms ease-in-out;\n}\n.sideBar__addProject:hover {\n  color: #22d3ee;\n}\n\n.listContainer {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  display: grid;\n  position: relative;\n  background-color: hsl(235deg, 24%, 19%);\n  grid-template-rows: 6fr 1fr;\n  z-index: 0;\n  max-height: 66vh;\n  animation: slide-up 450ms ease-in-out 1 normal;\n}\n@media (max-width: 900px) {\n  .listContainer {\n    padding-top: 1rem;\n    max-height: 100%;\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.listContainer__lists {\n  padding: 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  transition: all 150ms ease-in-out;\n  max-height: 65vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.listContainer__lists::-webkit-scrollbar {\n  width: 7px;\n}\n.listContainer__lists::-webkit-scrollbar-track {\n  background: hsl(234deg, 39%, 85%);\n}\n.listContainer__lists::-webkit-scrollbar-thumb {\n  background-color: hsl(235deg, 21%, 11%);\n  border-radius: 5px;\n}\n@media (max-width: 900px) {\n  .listContainer__lists {\n    padding: 0.5rem;\n    font-size: 0.7rem;\n  }\n}\n.listContainer__listItem {\n  position: relative;\n  background-color: hsl(235deg, 21%, 11%);\n  display: grid;\n  grid-template-columns: 0.3fr 4fr 0.5fr 1.6fr 0.5fr 0.5fr;\n  align-items: center;\n  padding: 0.7rem;\n  gap: 1rem;\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 4px;\n  transition: all 150ms ease-out;\n  animation: slide-left 450ms ease-in-out 1 normal;\n}\n@media (max-width: 1160px) {\n  .listContainer__listItem {\n    padding: 0.3rem;\n    font-size: 0.7rem;\n  }\n}\n@media (max-width: 900px) {\n  .listContainer__listItem {\n    padding: 0.3rem;\n    font-size: 0.7rem;\n  }\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.listContainer__listItem input {\n  cursor: pointer;\n}\n.listContainer__listItem p {\n  justify-self: start;\n  max-width: 60%;\n}\n.listContainer__listItem .editIcon, .listContainer__listItem .delIcon, .listContainer__listItem .taskDetails {\n  cursor: pointer;\n  font-size: inherit;\n  transition: all 150ms ease-out;\n}\n.listContainer__listItem .editIcon:hover, .listContainer__listItem .delIcon:hover, .listContainer__listItem .taskDetails:hover {\n  opacity: 0.7;\n}\n@media (max-width: 900px) {\n  .listContainer__listItem .editIcon, .listContainer__listItem .delIcon, .listContainer__listItem .taskDetails {\n    font-size: 0.6rem;\n  }\n}\n.listContainer__listItem .editIcon {\n  height: 25px;\n  justify-self: end;\n}\n.listContainer__listItem .delIcon {\n  height: 25px;\n  justify-self: center;\n}\n@media (max-width: 900px) {\n  .listContainer__listItem .editIcon, .listContainer__listItem .delIcon {\n    height: 22.5px;\n  }\n}\n.listContainer__listItem .dateContainer {\n  justify-self: center;\n  padding: 0.5rem;\n}\n.listContainer__listItem .dateContainer p {\n  font-size: inherit;\n  max-width: 7rem;\n}\n.listContainer__listItem .taskDetails {\n  right: 15rem;\n  top: 0.7rem;\n  font-size: inherit;\n  border: 1px solid hsl(220deg, 98%, 61%);\n  padding: 0.5rem;\n}\n.listContainer__addTask {\n  position: relative;\n}\n.listContainer__addTask__addBtn {\n  background: hsl(236deg, 33%, 92%);\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n.listContainer__addTask__addBtn:hover {\n  opacity: 0.8;\n  transform: scale(0.95) rotate(90deg);\n  background-color: hsl(234deg, 39%, 85%);\n}\n.listContainer__createTaskModal {\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  max-height: 50vh;\n  width: 30vw;\n  padding: 1rem;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  top: 2rem;\n  left: 12.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n.listContainer__createTaskModal div {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n@media (max-width: 1450px) {\n  .listContainer__createTaskModal {\n    left: 9rem;\n  }\n}\n@media (max-width: 900px) {\n  .listContainer__createTaskModal {\n    left: 2.5rem;\n    width: 70vw;\n  }\n}\n.listContainer__createProjectModal {\n  position: absolute;\n  margin-inline: auto;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  height: 22.5vh;\n  width: 22.5vw;\n  padding: 1rem;\n  top: 7.5rem;\n  left: 17.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n@media (max-width: 1450px) {\n  .listContainer__createProjectModal {\n    left: 12rem;\n  }\n}\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.container {\n  display: grid;\n  margin-inline: auto;\n  height: 85vh;\n  width: 70vw;\n  max-width: 1800px;\n  transform: translateY(9.5%);\n  grid-template-columns: 1fr 2.8fr;\n  grid-template-rows: 1.15fr 4fr;\n}\n@media (max-width: 900px) {\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.5fr 6fr;\n    transform: translateY(7.5%);\n    height: 85vh;\n    width: 90vw;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/globals/_boilerplate.scss","webpack://./src/scss/style.scss","webpack://./src/scss/utilities/_variables.scss","webpack://./src/scss/layouts/_header.scss","webpack://./src/scss/layouts/_sideBar.scss","webpack://./src/scss/layouts/_listContainer.scss","webpack://./src/scss/layouts/_container.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities\" as *;\n*,\n*::after,\n*::before {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tbackground-color: $VeryDarkBlue;\n\tfont-family: $baseFontStyle;\n\toverflow: hidden;\n\tcolor: $LightGrayishBlue;\n}\ninput {\n\taccent-color: $LightGrayishBlueHover;\n}\n\ninput[type=\"text\"],\ntextarea {\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tcolor: $LightGrayishBlue;\n\tfont-family: inherit;\n\tpadding: 1rem;\n\tmargin-top: 1rem;\n\twidth: 100%;\n\tborder: none;\n\ttransition: all 450ms ease-in-out;\n\t&:focus {\n\t\toutline: 2px solid $BrightBlue;\n\t}\n}\ntextarea {\n\tresize: none;\n}\ninput[type=\"radio\"] {\n\tmargin-right: 1rem;\n\taccent-color: $VeryDarkBlue;\n}\nbutton {\n\tmargin-top: 1.5rem;\n\tmargin-inline: auto;\n\twidth: fit-content;\n\tpadding: 0.6rem 1rem;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tcolor: $LightGrayishBlue;\n\tfont-family: inherit;\n\tborder: none;\n\tborder-radius: 2px;\n\tcursor: pointer;\n\ttransition: all 100ms ease-in-out;\n\t&:hover {\n\t\ttransform: scale(0.95);\n\t}\n\t&:active {\n\t\ttransform: scale(0.98);\n\t}\n}\n.copyrightText {\n\tbackground: $CheckBackground;\n\t-webkit-text-fill-color: transparent;\n\t-webkit-background-clip: text;\n\tcolor: $LightGrayishBlueHover;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap\");\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: hsl(235deg, 21%, 11%);\n  font-family: \"Josefin Sans\", sans-serif;\n  overflow: hidden;\n  color: hsl(236deg, 33%, 92%);\n}\n\ninput {\n  accent-color: hsl(234deg, 39%, 85%);\n}\n\ninput[type=text],\ntextarea {\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  padding: 1rem;\n  margin-top: 1rem;\n  width: 100%;\n  border: none;\n  transition: all 450ms ease-in-out;\n}\ninput[type=text]:focus,\ntextarea:focus {\n  outline: 2px solid hsl(220deg, 98%, 61%);\n}\n\ntextarea {\n  resize: none;\n}\n\ninput[type=radio] {\n  margin-right: 1rem;\n  accent-color: hsl(235deg, 21%, 11%);\n}\n\nbutton {\n  margin-top: 1.5rem;\n  margin-inline: auto;\n  width: fit-content;\n  padding: 0.6rem 1rem;\n  background-color: hsl(235deg, 24%, 19%);\n  color: hsl(236deg, 33%, 92%);\n  font-family: inherit;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all 100ms ease-in-out;\n}\nbutton:hover {\n  transform: scale(0.95);\n}\nbutton:active {\n  transform: scale(0.98);\n}\n\n.copyrightText {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: hsl(234deg, 39%, 85%);\n}\n\n.header {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  position: relative;\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: flex;\n  animation: slide-down 450ms ease-in-out 1 normal;\n  min-height: 17vh;\n}\n@media (max-width: 900px) {\n  .header {\n    min-height: 12vh;\n  }\n  .header::before {\n    position: absolute;\n    content: \"\";\n  }\n}\n.header__title {\n  align-self: flex-end;\n  margin-left: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n  font-weight: 700;\n  color: hsl(234deg, 39%, 85%);\n  transition: all 250ms ease-in-out;\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.sideBar {\n  display: flex;\n  flex-direction: column;\n  background-color: hsl(235deg, 24%, 19%);\n  gap: 1rem;\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border-right: 1px solid hsl(236deg, 33%, 92%);\n  padding: 1rem 1rem 0 1rem;\n  animation: slide-in 450ms ease-in-out 1 normal;\n}\n@media (max-width: 1160px) {\n  .sideBar {\n    gap: 0.5rem;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 900px) {\n  .sideBar {\n    display: none;\n  }\n}\n.sideBar .responsiveSide {\n  position: fixed;\n  z-index: 2;\n  height: 83vh;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(-500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.sideBar .active {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__title {\n  background: linear-gradient(hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: hsl(234deg, 39%, 85%);\n  letter-spacing: 2px;\n  font-weight: 900;\n  font-size: 2rem;\n}\n.sideBar__upper {\n  margin-top: 1rem;\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n}\n.sideBar__tab {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.85rem 0.3rem;\n  padding-right: 1rem;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n  animation: slide-in 350ms ease-in-out 1 normal;\n}\n.sideBar__tab:hover {\n  background: hsl(235deg, 21%, 11%);\n  color: hsl(234deg, 39%, 85%);\n}\n.sideBar__tab .delIcon {\n  height: 25px;\n  transition: inherit;\n}\n.sideBar__tab .delIcon:hover {\n  opacity: 0.8;\n}\n.sideBar__project {\n  border-bottom: 1px solid hsl(236deg, 33%, 92%);\n  max-height: 15rem;\n  overflow: auto;\n  transition: all 200ms ease-in-out;\n  user-select: none;\n}\n.sideBar__project::-webkit-scrollbar {\n  width: 7px;\n}\n.sideBar__project::-webkit-scrollbar-track {\n  border-radius: 5px;\n  background: hsl(234deg, 39%, 85%);\n}\n.sideBar__project::-webkit-scrollbar-thumb {\n  background-color: hsl(235deg, 21%, 11%);\n  border-radius: 5px;\n}\n.sideBar__addProject {\n  cursor: pointer;\n  margin: 1.5rem 0 0.5rem;\n  transition: all 200ms ease-in-out;\n}\n.sideBar__addProject:hover {\n  color: #22d3ee;\n}\n\n.listContainer {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  display: grid;\n  position: relative;\n  background-color: hsl(235deg, 24%, 19%);\n  grid-template-rows: 6fr 1fr;\n  z-index: 0;\n  max-height: 66vh;\n  animation: slide-up 450ms ease-in-out 1 normal;\n}\n@media (max-width: 900px) {\n  .listContainer {\n    padding-top: 1rem;\n    max-height: 100%;\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(500px);\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.listContainer__lists {\n  padding: 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  transition: all 150ms ease-in-out;\n  max-height: 65vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.listContainer__lists::-webkit-scrollbar {\n  width: 7px;\n}\n.listContainer__lists::-webkit-scrollbar-track {\n  background: hsl(234deg, 39%, 85%);\n}\n.listContainer__lists::-webkit-scrollbar-thumb {\n  background-color: hsl(235deg, 21%, 11%);\n  border-radius: 5px;\n}\n@media (max-width: 900px) {\n  .listContainer__lists {\n    padding: 0.5rem;\n    font-size: 0.7rem;\n  }\n}\n.listContainer__listItem {\n  position: relative;\n  background-color: hsl(235deg, 21%, 11%);\n  display: grid;\n  grid-template-columns: 0.3fr 4fr 0.5fr 1.6fr 0.5fr 0.5fr;\n  align-items: center;\n  padding: 0.7rem;\n  gap: 1rem;\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 4px;\n  transition: all 150ms ease-out;\n  animation: slide-left 450ms ease-in-out 1 normal;\n}\n@media (max-width: 1160px) {\n  .listContainer__listItem {\n    padding: 0.3rem;\n    font-size: 0.7rem;\n  }\n}\n@media (max-width: 900px) {\n  .listContainer__listItem {\n    padding: 0.3rem;\n    font-size: 0.7rem;\n  }\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.listContainer__listItem input {\n  cursor: pointer;\n}\n.listContainer__listItem p {\n  justify-self: start;\n  max-width: 60%;\n}\n.listContainer__listItem .editIcon, .listContainer__listItem .delIcon, .listContainer__listItem .taskDetails {\n  cursor: pointer;\n  font-size: inherit;\n  transition: all 150ms ease-out;\n}\n.listContainer__listItem .editIcon:hover, .listContainer__listItem .delIcon:hover, .listContainer__listItem .taskDetails:hover {\n  opacity: 0.7;\n}\n@media (max-width: 900px) {\n  .listContainer__listItem .editIcon, .listContainer__listItem .delIcon, .listContainer__listItem .taskDetails {\n    font-size: 0.6rem;\n  }\n}\n.listContainer__listItem .editIcon {\n  height: 25px;\n  justify-self: end;\n}\n.listContainer__listItem .delIcon {\n  height: 25px;\n  justify-self: center;\n}\n@media (max-width: 900px) {\n  .listContainer__listItem .editIcon, .listContainer__listItem .delIcon {\n    height: 22.5px;\n  }\n}\n.listContainer__listItem .dateContainer {\n  justify-self: center;\n  padding: 0.5rem;\n}\n.listContainer__listItem .dateContainer p {\n  font-size: inherit;\n  max-width: 7rem;\n}\n.listContainer__listItem .taskDetails {\n  right: 15rem;\n  top: 0.7rem;\n  font-size: inherit;\n  border: 1px solid hsl(220deg, 98%, 61%);\n  padding: 0.5rem;\n}\n.listContainer__addTask {\n  position: relative;\n}\n.listContainer__addTask__addBtn {\n  background: hsl(236deg, 33%, 92%);\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n.listContainer__addTask__addBtn:hover {\n  opacity: 0.8;\n  transform: scale(0.95) rotate(90deg);\n  background-color: hsl(234deg, 39%, 85%);\n}\n.listContainer__createTaskModal {\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  max-height: 50vh;\n  width: 30vw;\n  padding: 1rem;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  top: 2rem;\n  left: 12.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n.listContainer__createTaskModal div {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n@media (max-width: 1450px) {\n  .listContainer__createTaskModal {\n    left: 9rem;\n  }\n}\n@media (max-width: 900px) {\n  .listContainer__createTaskModal {\n    left: 2.5rem;\n    width: 70vw;\n  }\n}\n.listContainer__createProjectModal {\n  position: absolute;\n  margin-inline: auto;\n  display: none;\n  flex-direction: column;\n  background: hsl(235deg, 21%, 11%);\n  height: 22.5vh;\n  width: 22.5vw;\n  padding: 1rem;\n  top: 7.5rem;\n  left: 17.5rem;\n  z-index: 1;\n  animation: pop-up 200ms ease-in-out 1 normal;\n}\n@media (max-width: 1450px) {\n  .listContainer__createProjectModal {\n    left: 12rem;\n  }\n}\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.container {\n  display: grid;\n  margin-inline: auto;\n  height: 85vh;\n  width: 70vw;\n  max-width: 1800px;\n  transform: translateY(9.5%);\n  grid-template-columns: 1fr 2.8fr;\n  grid-template-rows: 1.15fr 4fr;\n}\n@media (max-width: 900px) {\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.5fr 6fr;\n    transform: translateY(7.5%);\n    height: 85vh;\n    width: 90vw;\n  }\n}","@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@400;600;700&family=Marck+Script&display=swap\");\n\n// font styles\n$baseFontStyle: \"Josefin Sans\", sans-serif;\n\n// primary colors\n$BrightBlue: hsl(220, 98%, 61%);\n$CheckBackground: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));\n$lightAqua: #22d3ee;\n\n// darkmode colors\n$VeryDarkBlue: hsl(235, 21%, 11%);\n$VeryDarkDesaturatedBlue: hsl(235, 24%, 19%);\n$LightGrayishBlueHover: hsl(234, 39%, 85%);\n$LightGrayishBlue: hsl(236, 33%, 92%);\n$DarkGrayishBlue: hsl(234, 11%, 52%);\n$VeryDarkGrayishBlue: hsl(233, 14%, 35%);\n$VeryDarkGrayishBlue: hsl(237, 14%, 26%);\n","@use \"../utilities\" as *;\n\n.header {\n\tbackground: $CheckBackground;\n\tposition: relative;\n\tgrid-column: 2/3;\n\tgrid-row: 1/2;\n\tdisplay: flex;\n\tanimation: slide-down 450ms ease-in-out 1 normal;\n\tmin-height: 17vh;\n\n\t@media (max-width: 900px) {\n\t\tmin-height: 12vh;\n\t\t&::before {\n\t\t\tposition: absolute;\n\t\t\tcontent: \"\";\n\t\t}\n\t}\n\n\t&__title {\n\t\talign-self: flex-end;\n\t\tmargin-left: 2rem;\n\t\tmargin-bottom: 1rem;\n\t\tfont-size: 2rem;\n\t\t// letter-spacing: 1px;\n\t\tfont-weight: 700;\n\t\tcolor: $LightGrayishBlueHover;\n\t\ttransition: all 250ms ease-in-out;\n\t}\n\t@keyframes slide-down {\n\t\t0% {\n\t\t\ttransform: translateY(-500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateY(0);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.sideBar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tgap: 1rem;\n\tgrid-column: 1/2;\n\tgrid-row: 1/3;\n\tborder-right: 1px solid $LightGrayishBlue;\n\tpadding: 1rem 1rem 0 1rem;\n\tanimation: slide-in 450ms ease-in-out 1 normal;\n\n\t@media (max-width: 1160px) {\n\t\tgap: 0.5rem;\n\t\t// padding: 0.3rem;\n\t\tfont-size: 0.75rem;\n\t}\n\n\t@media (max-width: 900px) {\n\t\tdisplay: none;\n\t}\n\t.responsiveSide {\n\t\tposition: fixed;\n\t\tz-index: 2;\n\t\theight: calc(66vh + 17vh);\n\t}\n\t@keyframes slide-in {\n\t\t0% {\n\t\t\ttransform: translateX(-500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateX(0);\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t& .active {\n\t\tbackground: $VeryDarkBlue;\n\t\tcolor: $LightGrayishBlueHover;\n\t}\n\t&__title {\n\t\tbackground: $CheckBackground;\n\t\t-webkit-text-fill-color: transparent;\n\t\t-webkit-background-clip: text;\n\t\tcolor: $LightGrayishBlueHover;\n\t\tletter-spacing: 2px;\n\t\tfont-weight: 900;\n\t\tfont-size: 2rem;\n\t}\n\n\t&__upper {\n\t\tmargin-top: 1rem;\n\t\tborder-bottom: 1px solid $LightGrayishBlue;\n\t}\n\n\t&__tab {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tpadding: 0.85rem 0.3rem;\n\t\tpadding-right: 1rem;\n\t\t// border-radius: 5px;\n\t\tcursor: pointer;\n\t\ttransition: all 150ms ease-in-out;\n\t\tanimation: slide-in 350ms ease-in-out 1 normal;\n\t\t&:hover {\n\t\t\tbackground: $VeryDarkBlue;\n\t\t\tcolor: $LightGrayishBlueHover;\n\t\t}\n\t\t& .delIcon {\n\t\t\theight: 25px;\n\t\t\ttransition: inherit;\n\t\t\t&:hover {\n\t\t\t\topacity: 0.8;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__project {\n\t\tborder-bottom: 1px solid $LightGrayishBlue;\n\t\tmax-height: 15rem;\n\t\toverflow: auto;\n\t\ttransition: all 200ms ease-in-out;\n\t\tuser-select: none;\n\n\t\t&::-webkit-scrollbar {\n\t\t\twidth: 7px;\n\t\t}\n\n\t\t&::-webkit-scrollbar-track {\n\t\t\tborder-radius: 5px;\n\t\t\tbackground: $LightGrayishBlueHover;\n\t\t}\n\n\t\t&::-webkit-scrollbar-thumb {\n\t\t\tbackground-color: $VeryDarkBlue;\n\t\t\tborder-radius: 5px;\n\t\t}\n\t}\n\t&__addProject {\n\t\tcursor: pointer;\n\t\tmargin: 1.5rem 0 0.5rem;\n\t\ttransition: all 200ms ease-in-out;\n\t\t&:hover {\n\t\t\tcolor: $lightAqua;\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.listContainer {\n\tgrid-column: 2/3;\n\tgrid-row: 2/3;\n\tdisplay: grid;\n\tposition: relative;\n\tbackground-color: $VeryDarkDesaturatedBlue;\n\tgrid-template-rows: 6fr 1fr;\n\tz-index: 0;\n\tmax-height: 66vh;\n\t// overflow: auto;\n\t// overflow-y: scroll;\n\n\t@media (max-width: 900px) {\n\t\tpadding-top: 1rem;\n\t\tmax-height: 100%;\n\t}\n\n\tanimation: slide-up 450ms ease-in-out 1 normal;\n\t@keyframes slide-up {\n\t\t0% {\n\t\t\ttransform: translateY(500px);\n\t\t\topacity: 0;\n\t\t}\n\t\t40% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t\ttransform: translateY(0);\n\t\t}\n\t}\n\t&__lists {\n\t\tpadding: 1rem 2rem;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 0.65rem;\n\t\ttransition: all 150ms ease-in-out;\n\t\tmax-height: 65vh;\n\t\toverflow-y: auto;\n\t\toverflow-x: hidden;\n\t\t&::-webkit-scrollbar {\n\t\t\twidth: 7px;\n\t\t}\n\n\t\t&::-webkit-scrollbar-track {\n\t\t\tbackground: $LightGrayishBlueHover;\n\t\t}\n\n\t\t&::-webkit-scrollbar-thumb {\n\t\t\tbackground-color: $VeryDarkBlue;\n\t\t\tborder-radius: 5px;\n\t\t}\n\t\t@media (max-width: 900px) {\n\t\t\tpadding: 0.5rem;\n\t\t\tfont-size: 0.7rem;\n\t\t}\n\t}\n\t&__listItem {\n\t\tposition: relative;\n\t\tbackground-color: $VeryDarkBlue;\n\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 0.3fr 4fr 0.5fr 1.6fr 0.5fr 0.5fr;\n\t\talign-items: center;\n\n\t\tpadding: 0.7rem;\n\t\tgap: 1rem;\n\t\tborder-top-left-radius: 2px;\n\t\tborder-bottom-left-radius: 4px;\n\t\ttransition: all 150ms ease-out;\n\t\tanimation: slide-left 450ms ease-in-out 1 normal;\n\n\t\t@media (max-width: 1160px) {\n\t\t\tpadding: 0.3rem;\n\t\t\tfont-size: 0.7rem;\n\t\t}\n\t\t@media (max-width: 900px) {\n\t\t\tpadding: 0.3rem;\n\t\t\tfont-size: 0.7rem;\n\t\t}\n\n\t\t@keyframes slide-left {\n\t\t\t0% {\n\t\t\t\ttransform: translateX(500px);\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t50% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: translateX(0);\n\t\t\t}\n\t\t}\n\t\tinput {\n\t\t\tcursor: pointer;\n\t\t}\n\t\tp {\n\t\t\tjustify-self: start;\n\t\t\tmax-width: 60%;\n\t\t}\n\t\t& .editIcon,\n\t\t& .delIcon,\n\t\t& .taskDetails {\n\t\t\tcursor: pointer;\n\t\t\tfont-size: inherit;\n\t\t\ttransition: all 150ms ease-out;\n\t\t\t&:hover {\n\t\t\t\topacity: 0.7;\n\t\t\t}\n\t\t\t@media (max-width: 900px) {\n\t\t\t\tfont-size: 0.6rem;\n\t\t\t}\n\t\t}\n\n\t\t& .editIcon {\n\t\t\theight: 25px;\n\t\t\tjustify-self: end;\n\t\t}\n\t\t& .delIcon {\n\t\t\theight: 25px;\n\t\t\tjustify-self: center;\n\t\t}\n\n\t\t& .editIcon,\n\t\t& .delIcon {\n\t\t\t@media (max-width: 900px) {\n\t\t\t\theight: 22.5px;\n\t\t\t}\n\t\t}\n\n\t\t& .dateContainer {\n\t\t\tjustify-self: center;\n\t\t\tpadding: 0.5rem;\n\t\t\tp {\n\t\t\t\tfont-size: inherit;\n\t\t\t\tmax-width: 7rem;\n\t\t\t}\n\t\t}\n\t\t& .taskDetails {\n\t\t\tright: 15rem;\n\t\t\ttop: 0.7rem;\n\t\t\tfont-size: inherit;\n\t\t\tborder: 1px solid $BrightBlue;\n\t\t\tpadding: 0.5rem;\n\t\t}\n\t}\n\t&__addTask {\n\t\tposition: relative;\n\t\t&__addBtn {\n\t\t\tbackground: $LightGrayishBlue;\n\t\t\tposition: absolute;\n\t\t\ttop: 1rem;\n\t\t\tright: 1.5rem;\n\t\t\theight: 50px;\n\t\t\twidth: 50px;\n\t\t\tborder-radius: 50%;\n\t\t\tcursor: pointer;\n\t\t\ttransition: all 200ms ease-in-out;\n\t\t\t&:hover {\n\t\t\t\topacity: 0.8;\n\t\t\t\t// transform: scale(0.95);\n\n\t\t\t\ttransform: scale(0.95) rotate(90deg);\n\t\t\t\tbackground-color: $LightGrayishBlueHover;\n\t\t\t}\n\t\t}\n\t}\n\t&__createTaskModal {\n\t\tposition: absolute;\n\t\tdisplay: none;\n\t\tflex-direction: column;\n\t\tbackground: $VeryDarkBlue;\n\t\tmax-height: 50vh;\n\t\twidth: 30vw;\n\t\tpadding: 1rem;\n\t\tbox-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n\t\t\trgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\t\ttop: 2rem;\n\t\tleft: 12.5rem;\n\n\t\tz-index: 1;\n\t\tanimation: pop-up 200ms ease-in-out 1 normal;\n\t\tdiv {\n\t\t\tmargin-top: 1rem;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tgap: 0.3rem;\n\t\t}\n\t\t@media (max-width: 1450px) {\n\t\t\tleft: 9rem;\n\t\t}\n\t\t@media (max-width: 900px) {\n\t\t\tleft: 2.5rem;\n\t\t\twidth: 70vw;\n\t\t}\n\t}\n\t&__createProjectModal {\n\t\tposition: absolute;\n\t\tmargin-inline: auto;\n\t\tdisplay: none;\n\t\tflex-direction: column;\n\t\tbackground: $VeryDarkBlue;\n\t\theight: 22.5vh;\n\t\twidth: 22.5vw;\n\t\tpadding: 1rem;\n\t\ttop: 7.5rem;\n\t\tleft: 17.5rem;\n\t\tz-index: 1;\n\t\tanimation: pop-up 200ms ease-in-out 1 normal;\n\t\t@media (max-width: 1450px) {\n\t\t\tleft: 12rem;\n\t\t}\n\t}\n\t@keyframes pop-up {\n\t\t0% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n}\n","@use \"../utilities\" as *;\n\n.container {\n\tdisplay: grid;\n\tmargin-inline: auto;\n\theight: 85vh;\n\twidth: 70vw;\n\tmax-width: 1800px;\n\ttransform: translateY(9.5%);\n\tgrid-template-columns: 1fr 2.8fr;\n\tgrid-template-rows: 1.15fr 4fr;\n\n\t@media (max-width: 900px) {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 0.5fr 6fr;\n\t\ttransform: translateY(7.5%);\n\t\theight: 85vh;\n\t\twidth: 90vw;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons/delete-forever.svg":
/*!**************************************!*\
  !*** ./src/icons/delete-forever.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10edb3f34a49c8fe22aa.svg";

/***/ }),

/***/ "./src/icons/note-edit.svg":
/*!*********************************!*\
  !*** ./src/icons/note-edit.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea8e35f044b5f4b80422.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _defaultTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTab */ "./src/defaultTab.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");

// import taskComplete from "./completeTask";



// console.log("webpack here");

(0,_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_defaultTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
// taskComplete();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxlQUFlLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssYUFBYSxhQUFhLFdBQVcsYUFBYSxRQUFRLE1BQU0sWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksY0FBYyxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksY0FBYyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsYUFBYSxPQUFPLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxhQUFhLE9BQU8sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGFBQWEsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLGFBQWEsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1B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QTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxRUFBZTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUVBQWU7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUVBQWU7QUFDN0IsZ0JBQWdCLHFFQUFlO0FBQy9CO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDajJCb0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFFQUFlO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUI7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDbkZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLG1DQUFtQyxNQUFNLDBEQUEwRCxNQUFNO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUMvRjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjJDO0FBQ1M7QUFDcEQ7QUFDZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMkM7QUFDbUI7QUFDUTtBQUNsQjtBQUNwRDtBQUNlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsYUFBYSx1RUFBaUIsbUJBQW1CLDJFQUFxQixrQkFBa0I7QUFDeEY7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2IyQztBQUNTO0FBQ1U7QUFDL0M7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVFQUFpQjs7QUFFekM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCMkM7QUFDYTtBQUNRO0FBQ1o7QUFDcEQ7QUFDZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsb0VBQWMsNEJBQTRCLHdFQUFrQiwyQkFBMkI7QUFDcEc7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjJDO0FBQ1M7QUFDSTtBQUNWO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQSx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUywrNEJBQSs0Qjs7QUFFdDdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjOztBQUV0QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBLHlJQUF5STtBQUN6SSxJQUFJO0FBQ0oscUlBQXFJO0FBQ3JJLElBQUk7QUFDSiwrSUFBK0k7QUFDL0ksSUFBSTtBQUNKLGlKQUFpSjtBQUNqSjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjJDO0FBQ1M7QUFDckM7QUFDZixFQUFFLGtFQUFZO0FBQ2Q7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEQ7QUFDQTtBQUNWO0FBQ3JDO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gyQztBQUNTO0FBQ047QUFDaUI7QUFDaEQ7QUFDZjs7QUFFQSxFQUFFLGtFQUFZO0FBQ2QsdUJBQXVCLDJFQUFpQjtBQUN4QyxxQkFBcUIsK0RBQVMsMjJCQUEyMkI7O0FBRXo0QjtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQndEO0FBQ0o7QUFDSTtBQUNWO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLHVCQUF1QiwyRUFBaUI7QUFDeEMsOEJBQThCLCtEQUFTO0FBQ3ZDLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBYztBQUMzQjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxrQkFBa0IsNERBQU07QUFDeEIsZUFBZSxtRUFBUztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IwQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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bGludHByZXR0aWVyLy4vc3JjL2NvbXBsZXRlVGFzay5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9kZWZhdWx0VGFiLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VzbGludHByZXR0aWVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXNsaW50cHJldHRpZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzbGludHByZXR0aWVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2VzbGludHByZXR0aWVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lc2xpbnRwcmV0dGllci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWwgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIHRhc2tTdGF0dXNIYW5kbGVyKGUpIHtcblx0Ly8gY29uc3Qgc2libGluZ1BhcmEgPSBlLnRhcmdldC5uZXh0U2libGluZztcblx0Y29uc3QgcGFyZW50RGl2ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcblxuXHRjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdC8vIGNvbnNvbGUubG9nKHRhc2tJbmRleCk7XG5cdC8vIHN0b3JhZ2UuaW5ib3hbdGFza0luZGV4XS5zdGF0dXMgPT09IFwiSW5jb21wbGV0ZVwiXG5cdGlmIChlLnRhcmdldC5jaGVja2VkID09PSB0cnVlKSB7XG5cdFx0c3RvcmFnZS5pbmJveFt0YXNrSW5kZXhdLnN0YXR1cyA9IFwiQ29tcGxldGVcIjtcblx0XHRwYXJlbnREaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuXHRcdHBhcmVudERpdi5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcblx0fSBlbHNlIHtcblx0XHRzdG9yYWdlLmluYm94W3Rhc2tJbmRleF0uc3RhdHVzID0gXCJJbmNvbXBsZXRlXCI7XG5cdFx0cGFyZW50RGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG5cdFx0cGFyZW50RGl2LnN0eWxlLm9wYWNpdHkgPSAxO1xuXHR9XG5cdGxvY2FsLnVwZGF0ZUxvY2FsVG9kbyhzdG9yYWdlLmluYm94KTtcblx0Ly8gY29uc29sZS5sb2coc3RvcmFnZS5pbmJveCk7XG5cblx0Ly8gY29uc3QgaXNDb21wbGV0ZWQgPSBzaWJsaW5nUGFyYS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gXCJsaW5lLXRocm91Z2hcIjtcblxuXHQvLyBzaWJsaW5nUGFyYS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGlzQ29tcGxldGVkID8gXCJub25lXCIgOiBcImxpbmUtdGhyb3VnaFwiO1xuXHQvLyBwYXJlbnREaXYuc3R5bGUub3BhY2l0eSA9IGlzQ29tcGxldGVkID8gXCIxXCIgOiBcIjAuNlwiO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudCh0YXNrSXRlbSkge1xuXHR0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza1N0YXR1c0hhbmRsZXIpO1xuXHQvLyB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHJhbnNmZXJDb21wbGV0ZWRUYXNrKTtcbn1cblxuZnVuY3Rpb24gdGFza0NvbXBsZXRlQ2hlY2soKSB7XG5cdGNvbnN0IGxpc3RJdGVtcyA9IEFycmF5LmZyb20oXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0Q29udGFpbmVyX19saXN0SXRlbVwiKVxuXHQpO1xuXHQvLyBjb25zb2xlLmxvZyhsaXN0SXRlbXMpO1xuXHRsaXN0SXRlbXMuZm9yRWFjaCgodGFza0l0ZW0pID0+IHtcblx0XHRjb25zdCB0YXNrID0gdGFza0l0ZW07XG5cdFx0Y29uc3QgdGFza0luZGV4ID0gdGFzay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UuaW5ib3hbdGFza0luZGV4XSk7XG5cdFx0aWYgKHN0b3JhZ2UuaW5ib3hbdGFza0luZGV4XS5zdGF0dXMgPT09IFwiQ29tcGxldGVcIikge1xuXHRcdFx0dGFzay5maXJzdENoaWxkLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0dGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG5cdFx0XHR0YXNrLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXNrLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuXHRcdFx0dGFzay5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHR9XG5cdH0pO1xuXHQvLyBjb25zdCBsaXN0SW5kZXggPSBsaXN0SXRlbXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0NvbXBsZXRlKCkge1xuXHR0YXNrQ29tcGxldGVDaGVjaygpO1xuXHRjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tDaGVja2JveFwiKTtcblx0dGFza0NoZWNrYm94LmZvckVhY2goaGFuZGxlRXZlbnQpO1xufVxuIiwiaW1wb3J0IHRhc2tDb21wbGV0ZSBmcm9tIFwiLi9jb21wbGV0ZVRhc2tcIjtcbmltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG4vLyBpbXBvcnQgdGFicyBmcm9tIFwiLi90YWJzXCI7XG5pbXBvcnQgdGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmZ1bmN0aW9uIG1ha2VBY3RpdmUoKSB7XG5cdGNvbnN0IGluYm94VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0VGFiXCIpO1xuXHRjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xuXHRhbGxQcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuXHQvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGFsbFByb2plY3RzKSk7XG5cdGluYm94VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRUYWIoKSB7XG5cdG1ha2VBY3RpdmUoKTtcblx0ZG9tLmNsZWFyVGFza1NjcmVlbigpO1xuXHR0YXNrLmN1cnJlbnQoXCJJbmJveFwiKTtcblx0dGFzay5jcmVhdGUoKTtcblxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvXCIpKSB7XG5cdFx0Y29uc29sZS5sb2coXCJsb2NhbCBIRVJFXCIpO1xuXHRcdC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvXCIpKSk7XG5cdFx0Y29uc3QgbG9jYWxUb2RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb1wiKSk7XG5cdFx0c3RvcmFnZS5pbmJveCA9IGxvY2FsVG9kb0FycmF5O1xuXHR9XG5cblx0ZG9tLmRpc3BsYXlUb0RvbShzdG9yYWdlLmluYm94KTtcblx0dGFza0NvbXBsZXRlKCk7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB0YXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tIFwiLi9pY29ucy9kZWxldGUtZm9yZXZlci5zdmdcIjtcbmltcG9ydCBlZGl0SW1hZ2UgZnJvbSBcIi4vaWNvbnMvbm90ZS1lZGl0LnN2Z1wiO1xuaW1wb3J0IGNoZWNrVGFza0NvbXBsZXRlIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vLyB0YXNrIGRvbSBjb2RlXG5cbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza01vZGFsXCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RzXCIpO1xuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhclwiKTtcbmNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0J0blwiKTtcblxuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVcIik7XG5jb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIik7XG5jb25zdCBwcmlvcml0eVJhZGlvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwidGFza1ByaW9yaXR5XCIpO1xuXG5mdW5jdGlvbiByZXNldEZvcm1zKCkge1xuXHR0YXNrVGl0bGUucmVhZE9ubHkgPSBmYWxzZTtcblx0dGFza1RpdGxlLnZhbHVlID0gXCJcIjtcblxuXHR0YXNrRGVzYy5yZWFkT25seSA9IGZhbHNlO1xuXHR0YXNrRGVzYy52YWx1ZSA9IFwiXCI7XG5cblx0dGFza0R1ZS5yZWFkT25seSA9IGZhbHNlO1xuXHR0YXNrRHVlLnZhbHVlID0gXCJcIjtcblxuXHRwcmlvcml0eVJhZGlvcy5mb3JFYWNoKChyYWRpb3MpID0+IHtcblx0XHRjb25zdCByYWRpbyA9IHJhZGlvcztcblx0XHRyYWRpby5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdHJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza1NjcmVlbigpIHtcblx0bGlzdC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cdGxpc3Quc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuXHRzaWRlQmFyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcblx0cmVzZXRGb3JtcygpO1xuXG5cdHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdGVkaXRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrQnRuXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuXG5cdGNvbnN0IHRhc2tBcnJheSA9IEFycmF5LmZyb20oXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0Q29udGFpbmVyX19saXN0SXRlbVwiKVxuXHQpO1xuXHR0YXNrQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiKSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza01vZGFsKGUpIHtcblx0bGV0IGNsaWNrRGV0YWlsID0gZmFsc2U7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGlmIChpdGVtLmNvbnRhaW5zKGUudGFyZ2V0KSkgY2xpY2tEZXRhaWwgPSB0cnVlO1xuXHRcdC8vIGl0ZW0uY29udGFpbnMoZS50YXJnZXQpO1xuXHR9KTtcblx0Y29uc3Qgb3V0c2lkZUNsaWNrID1cblx0XHQhdGFza01vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuXHRcdCFhZGRUYXNrQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuXHRcdCFjbGlja0RldGFpbDtcblxuXHRpZiAob3V0c2lkZUNsaWNrKSB7XG5cdFx0cmVzZXRUYXNrU2NyZWVuKCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza01vZGFsKTtcblx0fVxufVxuXG5mdW5jdGlvbiBuZXdUYXNrTW9kYWwoKSB7XG5cdGNvbnN0IHRhc2tBcnJheSA9IEFycmF5LmZyb20oXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0Q29udGFpbmVyX19saXN0SXRlbVwiKVxuXHQpO1xuXHR0YXNrQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiKSk7XG5cblx0bGlzdC5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0bGlzdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdHNpZGVCYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG5cdC8vIGNvbnNvbGUubG9nKGxpc3QpO1xuXG5cdHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdHRhc2tUaXRsZS5mb2N1cygpO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrTW9kYWwpO1xuXHQvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKSk7XG59XG5cbmZ1bmN0aW9uIGRldGFpbEVkaXRNb2RhbCgpIHtcblx0Y29uc3QgdGFza0FycmF5ID0gQXJyYXkuZnJvbShcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RDb250YWluZXJfX2xpc3RJdGVtXCIpXG5cdCk7XG5cdHRhc2tBcnJheS5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCIpKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrQnRuXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXHRzaWRlQmFyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblx0bGlzdC5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0dGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza01vZGFsKTtcbn1cblxuZnVuY3Rpb24gc2hvd0RldGFpbHModGFza0RldGFpbHMsIHRhc2tPYmopIHtcblx0dGFza0RldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRkZXRhaWxFZGl0TW9kYWwoKTtcblxuXHRcdHRhc2tUaXRsZS5yZWFkT25seSA9IHRydWU7XG5cdFx0dGFza0Rlc2MucmVhZE9ubHkgPSB0cnVlO1xuXHRcdHRhc2tEdWUucmVhZE9ubHkgPSB0cnVlO1xuXG5cdFx0dGFza1RpdGxlLnZhbHVlID0gdGFza09iai50aXRsZTtcblx0XHR0YXNrRGVzYy52YWx1ZSA9IHRhc2tPYmouZGVzY3JpcHRpb247XG5cdFx0dGFza0R1ZS52YWx1ZSA9IHRhc2tPYmouZHVlRGF0ZTtcblx0XHRwcmlvcml0eVJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuXHRcdFx0aWYgKHJhZGlvLnZhbHVlID09PSB0YXNrT2JqLnByaW9yaXR5KSByYWRpby5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdGVsc2UgcmFkaW8uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZG9tRmFjdG9yeShpdGVtLCBpbmRleCkge1xuXHRjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdENvbnRhaW5lcl9fbGlzdEl0ZW1cIik7XG5cdGRpdkl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBgJHtpbmRleH1gKTtcblxuXHRpZiAoaXRlbS5wcmlvcml0eSA9PT0gXCJIaWdoXCIpIGRpdkl0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9IFwiOHB4IHNvbGlkICNkYzI2MjZcIjtcblx0aWYgKGl0ZW0ucHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpXG5cdFx0ZGl2SXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCI4cHggc29saWQgI2ZlZjA4YVwiO1xuXHRpZiAoaXRlbS5wcmlvcml0eSA9PT0gXCJMb3dcIikgZGl2SXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCI4cHggc29saWQgIzIyYzU1ZVwiO1xuXG5cdGNvbnN0IGlucHV0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGlucHV0Q2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIjtcblx0aW5wdXRDaGVjay5jbGFzc0xpc3QuYWRkKFwidGFza0NoZWNrYm94XCIpO1xuXG5cdGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0cGFyYS50ZXh0Q29udGVudCA9IGAke2l0ZW0udGl0bGV9YDtcblxuXHRjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGV0YWlsc1wiKTtcblx0dGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcblxuXHRjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZUNvbnRhaW5lclwiKTtcblx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0KG5ldyBEYXRlKGl0ZW0uZHVlRGF0ZSksIFwiTU1NIGRkLCB5eXl5XCIpO1xuXHRkYXRlLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0dGVkRGF0ZX1gO1xuXHRkYXRlQ29udGFpbmVyLmFwcGVuZChkYXRlKTtcblxuXHRjb25zdCBkZWxJbWcgPSBuZXcgSW1hZ2UoKTtcblx0ZGVsSW1nLnNyYyA9IGRlbGV0ZUltYWdlO1xuXHRkZWxJbWcuY2xhc3NMaXN0LmFkZChcImRlbEljb25cIik7XG5cblx0Y29uc3QgZWRpdEltZyA9IG5ldyBJbWFnZSgpO1xuXHRlZGl0SW1nLnNyYyA9IGVkaXRJbWFnZTtcblx0ZWRpdEltZy5jbGFzc0xpc3QuYWRkKFwiZWRpdEljb25cIik7XG5cblx0Y2hlY2tUYXNrQ29tcGxldGUoKTtcblxuXHRkaXZJdGVtLmFwcGVuZChpbnB1dENoZWNrLCBwYXJhLCB0YXNrRGV0YWlscywgZGF0ZUNvbnRhaW5lciwgZWRpdEltZywgZGVsSW1nKTtcblx0bGlzdC5hcHBlbmQoZGl2SXRlbSk7XG5cblx0Ly8gQWRkcyBkZWxldGUgdGFzayBGdW5jdGlvbmFsaXR5XG5cdHRhc2suZGVsZXRlVGFza3MoZGVsSW1nKTtcblxuXHQvLyB0YXNrIERldGFpbHNcblx0Ly8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrRGV0YWlsc1wiKSk7XG5cdHNob3dEZXRhaWxzKHRhc2tEZXRhaWxzLCBzdG9yYWdlLmluYm94W2luZGV4XSk7XG5cblx0Ly8gRWRpdCB0YXNrXG5cdHRhc2suZWRpdFRhc2soZWRpdEltZywgc3RvcmFnZS5pbmJveFtpbmRleF0pO1xufVxuXG4vLyB0YWJzIGRvbSBtYW5pcHVsYXRpb25zXG5cbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdE1vZGFsXCIpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKTtcblxuZnVuY3Rpb24gcmVzZXRQcm9qZWN0U2NyZWVuKCkge1xuXHRsaXN0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVcIikudmFsdWUgPSBcIlwiO1xuXHRsaXN0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcblx0c2lkZUJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG5cdHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdE1vZGFsKGUpIHtcblx0Y29uc3Qgb3V0c2lkZUNsaWNrID1cblx0XHQhcHJvamVjdE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhbmV3UHJvamVjdEJ0bi5jb250YWlucyhlLnRhcmdldCk7XG5cdGlmIChvdXRzaWRlQ2xpY2spIHtcblx0XHRyZXNldFByb2plY3RTY3JlZW4oKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0TW9kYWwpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJldmVhbFByb2plY3RNb2RhbCgpIHtcblx0bGlzdC5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0bGlzdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdC8vIGNvbnNvbGUubG9nKGxpc3QpO1xuXHRzaWRlQmFyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblx0cHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVcIikuZm9jdXMoKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdE1vZGFsKTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb2plY3RBY3RpdmUocHJvamVjdCkge1xuXHRjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xuXHRhbGxQcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuXHQvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGFsbFByb2plY3RzKSk7XG5cdHByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGRvbSgpIHtcblx0ZnVuY3Rpb24gZGlzcGxheVRvRG9tKHN0b3JhZ2VBcnJheSkge1xuXHRcdHN0b3JhZ2VBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRkb21GYWN0b3J5KGl0ZW0sIHN0b3JhZ2UuaW5ib3guaW5kZXhPZihpdGVtKSk7XG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coc3RvcmFnZS5pbmJveCk7XG5cdFx0Ly8gc3RvcmFnZUFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHQvLyBcdGRvbUZhY3RvcnkoaXRlbSwgc3RvcmFnZS5pbmJveC5pbmRleE9mKGl0ZW0pKTtcblx0XHQvLyB9KTtcblx0fVxuXG5cdGNvbnN0IGNsZWFyVGFza1NjcmVlbiA9ICgpID0+IHtcblx0XHRsZXQgY2hpbGQgPSBsaXN0Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cblx0XHR3aGlsZSAoY2hpbGQpIHtcblx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXHRcdFx0Y2hpbGQgPSBsaXN0Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Ly8gZm9yIFRhc2tcblx0XHRuZXdUYXNrTW9kYWwsXG5cdFx0cmVzZXRUYXNrU2NyZWVuLFxuXHRcdGRvbUZhY3RvcnksXG5cdFx0ZGV0YWlsRWRpdE1vZGFsLFxuXHRcdGNsZWFyVGFza1NjcmVlbixcblx0XHRkaXNwbGF5VG9Eb20sXG5cblx0XHQvLyBmb3IgdGFic1xuXHRcdHJldmVhbFByb2plY3RNb2RhbCxcblx0XHRyZXNldFByb2plY3RTY3JlZW4sXG5cdFx0bWFrZVByb2plY3RBY3RpdmUsXG5cdH07XG59KSgpO1xuIiwiZnVuY3Rpb24gdXBkYXRlTG9jYWxUb2RvKHRvZG8pIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvXCIsIEpTT04uc3RyaW5naWZ5KHRvZG8pKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsVGFicyh0YWJzKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFic1wiLCBKU09OLnN0cmluZ2lmeSh0YWJzKSk7XG59XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbG9jYWwoKSB7XG5cdHJldHVybiB7XG5cdFx0dXBkYXRlTG9jYWxUb2RvLFxuXHRcdHVwZGF0ZUxvY2FsVGFicyxcblx0fTtcbn0pKCk7XG4iLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcblx0Y29uc3QgaW5ib3ggPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiVGVzdCBUYXNrIDFcIixcblx0XHRcdHRhYjogXCJJbmJveFwiLFxuXHRcdFx0ZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0ZXN0IHRhc2sgMVwiLFxuXHRcdFx0ZHVlRGF0ZTogXCIyMDIzLTAyLTE2XCIsXG5cdFx0XHRwcmlvcml0eTogXCJIaWdoXCIsXG5cdFx0XHRzdGF0dXM6IFwiQ29tcGxldGVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcIlRlc3QgVGFzayAyXCIsXG5cdFx0XHR0YWI6IFwiSW5ib3hcIixcblx0XHRcdGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGVzdCB0YXNrIDJcIixcblx0XHRcdGR1ZURhdGU6IFwiMjAyMy0wMi0xN1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwiTWVkaXVtXCIsXG5cdFx0XHRzdGF0dXM6IFwiSW5jb21wbGV0ZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiVGVzdCBGYW0gMVwiLFxuXHRcdFx0dGFiOiBcIkZhbWlseVwiLFxuXHRcdFx0ZGVzY3JpcHRpb246IFwiVGhpcyBpcyBGYW0gdGFzayAxXCIsXG5cdFx0XHRkdWVEYXRlOiBcIjIwMjMtMDItMTlcIixcblx0XHRcdHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuXHRcdFx0c3RhdHVzOiBcIkluY29tcGxldGVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcIlRlc3QgUGVycyAxXCIsXG5cdFx0XHR0YWI6IFwiUGVyc29uYWxcIixcblx0XHRcdGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgUGVycyB0YXNrIDFcIixcblx0XHRcdGR1ZURhdGU6IFwiMjAyMy0wMi0yMVwiLFxuXHRcdFx0cHJpb3JpdHk6IFwiTWVkaXVtXCIsXG5cdFx0XHRzdGF0dXM6IFwiSW5jb21wbGV0ZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiVGVzdCBTZWNyZXQgMVwiLFxuXHRcdFx0dGFiOiBcIlNlY3JldFwiLFxuXHRcdFx0ZGVzY3JpcHRpb246IFwiVGhpcyBpcyBTZWNyZXQgdGFzayAxXCIsXG5cdFx0XHRkdWVEYXRlOiBcIjIwMjMtMDItMjJcIixcblx0XHRcdHByaW9yaXR5OiBcIkxvd1wiLFxuXHRcdFx0c3RhdHVzOiBcIkluY29tcGxldGVcIixcblx0XHR9LFxuXHRdO1xuXHRyZXR1cm4ge1xuXHRcdGluYm94LFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcbiIsImltcG9ydCBkZWZhdWx0VGFiIGZyb20gXCIuL2RlZmF1bHRUYWJcIjtcbmltcG9ydCB0YXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBjaGVja0NvbXBsZXRlVGFzayBmcm9tIFwiLi9jb21wbGV0ZVRhc2tcIjtcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tIFwiLi9pY29ucy9kZWxldGUtZm9yZXZlci5zdmdcIjtcbmltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgbG9jYWwgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmxldCBwcm9qZWN0QXJyYXkgPSBbXCJGYW1pbHlcIiwgXCJQZXJzb25hbFwiLCBcIlNlY3JldFwiXTtcblxuY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbi8vIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJcIik7XG4vLyBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0c1wiKTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKTtcbi8vIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdE1vZGFsXCIpO1xuXG4vLyAgZGlzcGxheSBwcm9qZWN0IHNlY3Rpb24gYW5kIHNldHVwXG5cbmZ1bmN0aW9uIGFkZExvYWRFdmVudHMocHJvamVjdCwgcHJvamVjdEl0ZW0sIGRlbEltZykge1xuXHRwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNvbnN0IG91dHNpZGVEZWwgPSBwcm9qZWN0LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhZGVsSW1nLmNvbnRhaW5zKGUudGFyZ2V0KTtcblx0XHRpZiAob3V0c2lkZURlbCkge1xuXHRcdFx0dGFzay5jdXJyZW50KHByb2plY3RJdGVtKTtcblx0XHRcdGRvbS5jbGVhclRhc2tTY3JlZW4oKTtcblx0XHRcdHRhc2suY3JlYXRlKCk7XG5cdFx0XHRjb25zdCBwcm9qZWN0UGVyc29uYWxBcnJheSA9IHN0b3JhZ2UuaW5ib3guZmlsdGVyKFxuXHRcdFx0XHQoaXRlbSkgPT4gaXRlbS50YWIgPT09IHByb2plY3RJdGVtXG5cdFx0XHQpO1xuXHRcdFx0ZG9tLmRpc3BsYXlUb0RvbShwcm9qZWN0UGVyc29uYWxBcnJheSk7XG5cdFx0XHRjaGVja0NvbXBsZXRlVGFzaygpO1xuXHRcdFx0ZG9tLm1ha2VQcm9qZWN0QWN0aXZlKHByb2plY3QpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZERlbGV0ZUV2ZW50KGRlbEltZykge1xuXHRkZWxJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJrb25uaWNoaXdhXCIpO1xuXG5cdFx0Y29uc3QgZG9tQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFRhYlwiKSk7XG5cdFx0Y29uc3QgZG9tRWxlVG9SZW1vdmUgPSBkb21BcnJheS5pbmRleE9mKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuXHRcdHByb2plY3RUYWIucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG5cdFx0cHJvamVjdEFycmF5LnNwbGljZShkb21FbGVUb1JlbW92ZSwgMSk7XG5cblx0XHRsb2NhbC51cGRhdGVMb2NhbFRhYnMocHJvamVjdEFycmF5KTtcblx0XHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coZG9tRWxlVG9SZW1vdmUpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkocHJvamVjdEl0ZW0sIGluZGV4KSB7XG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlQmFyX190YWJcIiwgXCJwcm9qZWN0VGFiXCIpO1xuXHRwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgYCR7aW5kZXh9YCk7XG5cdHByb2plY3RUYWIuYXBwZW5kKHByb2plY3QpO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RJdGVtfWA7XG5cblx0Ly8gY29uc3QgZGVsZXRlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Ly8gZGVsZXRlRWxlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG5cdGNvbnN0IGRlbEltZyA9IG5ldyBJbWFnZSgpO1xuXHRkZWxJbWcuc3JjID0gZGVsZXRlSW1hZ2U7XG5cdGRlbEltZy5jbGFzc0xpc3QuYWRkKFwiZGVsSWNvblwiKTtcblx0cHJvamVjdC5hcHBlbmQocHJvamVjdE5hbWUsIGRlbEltZyk7XG5cdGFkZERlbGV0ZUV2ZW50KGRlbEltZyk7XG5cdGFkZExvYWRFdmVudHMocHJvamVjdCwgcHJvamVjdEl0ZW0sIGRlbEltZyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcblx0cHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3RJdGVtLCBpbmRleCkgPT4ge1xuXHRcdHByb2plY3RGYWN0b3J5KHByb2plY3RJdGVtLCBpbmRleCk7XG5cdH0pO1xufVxuXG4vLyAgQ3JlYXRlIFByb2plY3Qgc2VjdGlvblxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVwiKS52YWx1ZTtcblx0Y29uc3QgaXNFbXB0eSA9IHByb2plY3RUaXRsZSA9PT0gXCJcIjtcblx0aWYgKCFpc0VtcHR5KSB7XG5cdFx0Y29uc3QgcHJvamVjdEl0ZW0gPSBwcm9qZWN0VGl0bGU7XG5cdFx0cHJvamVjdEFycmF5LnB1c2gocHJvamVjdEl0ZW0pO1xuXHRcdGRvbS5yZXNldFByb2plY3RTY3JlZW4oKTtcblx0XHRwcm9qZWN0RmFjdG9yeShwcm9qZWN0SXRlbSwgc3RvcmFnZS5pbmJveC5pbmRleE9mKHByb2plY3RJdGVtKSk7XG5cdFx0Ly8gY29uc29sZS5sb2coc3RvcmFnZS5pbmJveCk7XG5cdFx0bG9jYWwudXBkYXRlTG9jYWxUYWJzKHByb2plY3RBcnJheSk7XG5cdFx0Y2hlY2tDb21wbGV0ZVRhc2soKTtcblx0fVxufVxuZnVuY3Rpb24gc3VibWl0UHJvamVjdERhdGEoKSB7XG5cdGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3RCdG5cIik7XG5cdGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvQXJyYXkpO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcblx0ZG9tLnJldmVhbFByb2plY3RNb2RhbCgpO1xuXHRzdWJtaXRQcm9qZWN0RGF0YSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWJzKCkge1xuXHRjb25zdCBpbmJveFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdFRhYlwiKTtcblxuXHRpbmJveFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVmYXVsdFRhYik7XG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhYnNcIikpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcInRhYnMgYXJlIGhlcmVcIik7XG5cdFx0Y29uc3QgbG9jYWxUYWJBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YWJzXCIpKTtcblx0XHRwcm9qZWN0QXJyYXkgPSBsb2NhbFRhYkFycmF5O1xuXHR9XG5cdGRpc3BsYXlQcm9qZWN0cygpO1xuXHRuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVOZXdQcm9qZWN0KTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdEFycmF5IH07XG4iLCJpbXBvcnQgY2hlY2tUYXNrQ29tcGxldGUgZnJvbSBcIi4vY29tcGxldGVUYXNrXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgZG9tIGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IGxvY2FsIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHRhYnMsIHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vdGFic1wiO1xuXG5jbGFzcyBUYXNrQ3JlYXRvciB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBjdXJyZW50VGFiLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLnRhYiA9IGN1cnJlbnRUYWI7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2M7XG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5zdGF0dXMgPSBcIkluY29tcGxldGVcIjtcblx0fVxufVxuXG5sZXQgY3VycmVudFRhYjtcblxuLy8gY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrTW9kYWxcIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrXCIpO1xuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdHNcIik7XG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyXCIpO1xuY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrQnRuXCIpO1xuXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKTtcbmNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG5jb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKTtcbmNvbnN0IHByaW9yaXR5UmFkaW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJ0YXNrUHJpb3JpdHlcIik7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tzKGRpdikge1xuXHRmdW5jdGlvbiBkZWxldGVGcm9tU3RvcmFnZShlKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cblx0XHRzdG9yYWdlLmluYm94LnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRkb20uY2xlYXJUYXNrU2NyZWVuKCk7XG5cdFx0aWYgKGN1cnJlbnRUYWIgPT09IFwiSW5ib3hcIikgZG9tLmRpc3BsYXlUb0RvbShzdG9yYWdlLmluYm94KTtcblx0XHRlbHNlXG5cdFx0XHRkb20uZGlzcGxheVRvRG9tKHN0b3JhZ2UuaW5ib3guZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRhYiA9PT0gY3VycmVudFRhYikpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGRvbUVsZVRvUmVtb3ZlKTtcblx0XHQvLyBjb25zb2xlLmxvZyhzdG9yYWdlLmluYm94KTtcblx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCk7XG5cdFx0bG9jYWwudXBkYXRlTG9jYWxUb2RvKHN0b3JhZ2UuaW5ib3gpO1xuXHR9XG5cdGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlRnJvbVN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhlZGl0QnRuLCB0YXNrT2JqZWN0KSB7XG5cdGNvbnN0IHRhc2tPYmogPSB0YXNrT2JqZWN0O1xuXHRmdW5jdGlvbiB1cGRhdGVUYXNrRGV0YWlscyhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dGFza09iai50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpLnZhbHVlO1xuXHRcdHRhc2tPYmouZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKS52YWx1ZTtcblx0XHR0YXNrT2JqLmR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEdWVEYXRlXCIpLnZhbHVlO1xuXHRcdHByaW9yaXR5UmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG5cdFx0XHRpZiAocmFkaW8uY2hlY2tlZCkgdGFza09iai5wcmlvcml0eSA9IHJhZGlvLnZhbHVlO1xuXHRcdH0pO1xuXHRcdC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UuaW5ib3gpO1xuXG5cdFx0ZG9tLmNsZWFyVGFza1NjcmVlbigpO1xuXHRcdGlmIChjdXJyZW50VGFiID09PSBcIkluYm94XCIpIGRvbS5kaXNwbGF5VG9Eb20oc3RvcmFnZS5pbmJveCk7XG5cdFx0ZWxzZSB7XG5cdFx0XHRkb20uZGlzcGxheVRvRG9tKHN0b3JhZ2UuaW5ib3guZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRhYiA9PT0gY3VycmVudFRhYikpO1xuXHRcdH1cblxuXHRcdGxvY2FsLnVwZGF0ZUxvY2FsVG9kbyhzdG9yYWdlLmluYm94KTtcblxuXHRcdGNoZWNrVGFza0NvbXBsZXRlKCk7XG5cdFx0ZWRpdFRhc2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRhc2tEZXRhaWxzKTtcblx0XHRkb20ucmVzZXRUYXNrU2NyZWVuKCk7XG5cdH1cblxuXHRlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0ZG9tLmRldGFpbEVkaXRNb2RhbCgpO1xuXHRcdGVkaXRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuXHRcdC8vIGNvbnNvbGUubG9nKHRhc2tPYmouZHVlRGF0ZSk7XG5cblx0XHR0YXNrVGl0bGUudmFsdWUgPSB0YXNrT2JqLnRpdGxlO1xuXHRcdHRhc2tEZXNjLnZhbHVlID0gdGFza09iai5kZXNjcmlwdGlvbjtcblx0XHR0YXNrRHVlLnZhbHVlID0gdGFza09iai5kdWVEYXRlO1xuXHRcdHByaW9yaXR5UmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG5cdFx0XHRpZiAocmFkaW8udmFsdWUgPT09IHRhc2tPYmoucHJpb3JpdHkpIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuXHRcdH0pO1xuXHRcdGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVUYXNrRGV0YWlscyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCB0aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcblx0Y29uc3QgZGVzYyA9IHRhc2tEZXNjLnZhbHVlO1xuXHRjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tEdWUudmFsdWU7XG5cblx0bGV0IHRhc2tQcmlvcml0eSA9IFwiXCI7XG5cdHByaW9yaXR5UmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG5cdFx0aWYgKHJhZGlvLmNoZWNrZWQpIHRhc2tQcmlvcml0eSA9IHJhZGlvLnZhbHVlO1xuXHR9KTtcblxuXHRjb25zdCBpc0VtcHR5ID1cblx0XHR0aXRsZSAhPT0gXCJcIiAmJiBkZXNjICE9PSBcIlwiICYmIHRhc2tEdWVEYXRlICE9PSBcIlwiICYmIHRhc2tQcmlvcml0eSAhPT0gXCJcIjtcblxuXHRpZiAoaXNFbXB0eSkge1xuXHRcdGNvbnN0IHRhc2tJdGVtID0gbmV3IFRhc2tDcmVhdG9yKFxuXHRcdFx0dGl0bGUsXG5cdFx0XHRjdXJyZW50VGFiLFxuXHRcdFx0ZGVzYyxcblx0XHRcdHRhc2tEdWVEYXRlLFxuXHRcdFx0dGFza1ByaW9yaXR5XG5cdFx0KTtcblx0XHRzdG9yYWdlLmluYm94LnB1c2godGFza0l0ZW0pO1xuXG5cdFx0bG9jYWwudXBkYXRlTG9jYWxUb2RvKHN0b3JhZ2UuaW5ib3gpO1xuXHRcdGNvbnNvbGUubG9nKHN0b3JhZ2UuaW5ib3gpO1xuXHRcdGRvbS5yZXNldFRhc2tTY3JlZW4oKTtcblxuXHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuXHRcdC8vIFx0c3RvcmFnZS5pbmJveC5pbmRleE9mKHRhc2tJdGVtKSxcblx0XHQvLyBcdEpTT04uc3RyaW5naWZ5KHRhc2tJdGVtKVxuXHRcdC8vICk7XG5cblx0XHRkb20uZG9tRmFjdG9yeSh0YXNrSXRlbSwgc3RvcmFnZS5pbmJveC5pbmRleE9mKHRhc2tJdGVtKSk7XG5cblx0XHRjaGVja1Rhc2tDb21wbGV0ZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2tEYXRhKCkge1xuXHRjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrQnRuXCIpO1xuXHRzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb0FycmF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcblx0ZG9tLm5ld1Rhc2tNb2RhbCgpO1xuXHRzdWJtaXRUYXNrRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdEFjdGl2ZShwcm9qZWN0KSB7XG5cdGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XG5cdGFsbFByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG5cdC8vIGNvbnNvbGUubG9nKEFycmF5LmZyb20oYWxsUHJvamVjdHMpKTtcblx0cHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gdGFzaygpIHtcblx0Y29uc3QgY3VycmVudCA9ICh0YWIpID0+IHtcblx0XHRjdXJyZW50VGFiID0gdGFiO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyVGl0bGVcIikudGV4dENvbnRlbnQgPSBjdXJyZW50VGFiO1xuXHRcdC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUYWIpO1xuXHRcdHJldHVybiBjdXJyZW50VGFiO1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRhc2spO1xuXHQvLyBsb2NhbC51cGRhdGVMb2NhbFRvZG8oc3RvcmFnZS5pbmJveCk7XG5cdC8vIGxvY2FsLnVwZGF0ZUxvY2FsVGFicyhwcm9qZWN0QXJyYXkpO1xuXHRyZXR1cm4ge1xuXHRcdC8vIGZvciB0YXNrc1xuXHRcdGNyZWF0ZSxcblx0XHRjdXJyZW50LFxuXHRcdGVkaXRUYXNrLFxuXHRcdGRlbGV0ZVRhc2tzLFxuXHRcdG1ha2VQcm9qZWN0QWN0aXZlLFxuXHR9O1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDQwMDs2MDA7NzAwJmZhbWlseT1NYXJjaytTY3JpcHQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxufVxcblxcbmlucHV0IHtcXG4gIGFjY2VudC1jb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbnRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDI0JSwgMTklKTtcXG4gIGNvbG9yOiBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGhzbCgyMjBkZWcsIDk4JSwgNjElKTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBhY2NlbnQtY29sb3I6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDI0JSwgMTklKTtcXG4gIGNvbG9yOiBoc2woMjM2ZGVnLCAzMyUsIDkyJSk7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG59XFxuXFxuLmNvcHlyaWdodFRleHQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTJkZWcsIDEwMCUsIDY3JSksIGhzbCgyODBkZWcsIDg3JSwgNjUlKSk7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTJkZWcsIDEwMCUsIDY3JSksIGhzbCgyODBkZWcsIDg3JSwgNjUlKSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbmltYXRpb246IHNsaWRlLWRvd24gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuICBtaW4taGVpZ2h0OiAxN3ZoO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xcbiAgfVxcbiAgLmhlYWRlcjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIH1cXG59XFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyNCUsIDE5JSk7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxuICBhbmltYXRpb246IHNsaWRlLWluIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTE2MHB4KSB7XFxuICAuc2lkZUJhciB7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLnNpZGVCYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uc2lkZUJhciAucmVzcG9uc2l2ZVNpZGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjtcXG4gIGhlaWdodDogODN2aDtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5zaWRlQmFyIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLnNpZGVCYXJfX3RpdGxlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMTkyZGVnLCAxMDAlLCA2NyUpLCBoc2woMjgwZGVnLCA4NyUsIDY1JSkpO1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBjb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5zaWRlQmFyX191cHBlciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG59XFxuLnNpZGVCYXJfX3RhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuODVyZW0gMC4zcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMzUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbi5zaWRlQmFyX190YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLnNpZGVCYXJfX3RhYiAuZGVsSWNvbiB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xcbn1cXG4uc2lkZUJhcl9fdGFiIC5kZWxJY29uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuLnNpZGVCYXJfX3Byb2plY3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIG1heC1oZWlnaHQ6IDE1cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnNpZGVCYXJfX3Byb2plY3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA3cHg7XFxufVxcbi5zaWRlQmFyX19wcm9qZWN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcbi5zaWRlQmFyX19wcm9qZWN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zaWRlQmFyX19hZGRQcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMS41cmVtIDAgMC41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZUJhcl9fYWRkUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLmxpc3RDb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2ZnIgMWZyO1xcbiAgei1pbmRleDogMDtcXG4gIG1heC1oZWlnaHQ6IDY2dmg7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5saXN0Q29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0cyB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC42NXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gIG1heC1oZWlnaHQ6IDY1dmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA3cHg7XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubGlzdENvbnRhaW5lcl9fbGlzdHMge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgfVxcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgNGZyIDAuNWZyIDEuNmZyIDAuNWZyIDAuNWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLW91dDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtbGVmdCA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xcbiAgLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIHtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0SXRlbSBpbnB1dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0SXRlbSBwIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5lZGl0SWNvbiwgLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5kZWxJY29uLCAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLnRhc2tEZXRhaWxzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLW91dDtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5lZGl0SWNvbjpob3ZlciwgLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5kZWxJY29uOmhvdmVyLCAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLnRhc2tEZXRhaWxzOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmVkaXRJY29uLCAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmRlbEljb24sIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSAudGFza0RldGFpbHMge1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gIH1cXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5lZGl0SWNvbiB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5kZWxJY29uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSAuZWRpdEljb24sIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSAuZGVsSWNvbiB7XFxuICAgIGhlaWdodDogMjIuNXB4O1xcbiAgfVxcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmRhdGVDb250YWluZXIge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0SXRlbSAuZGF0ZUNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1heC13aWR0aDogN3JlbTtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC50YXNrRGV0YWlscyB7XFxuICByaWdodDogMTVyZW07XFxuICB0b3A6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMjBkZWcsIDk4JSwgNjElKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmxpc3RDb250YWluZXJfX2FkZFRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fYWRkVGFza19fYWRkQnRuIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxLjVyZW07XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmxpc3RDb250YWluZXJfX2FkZFRhc2tfX2FkZEJ0bjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpIHJvdGF0ZSg5MGRlZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcbi5saXN0Q29udGFpbmVyX19jcmVhdGVUYXNrTW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XFxuICB0b3A6IDJyZW07XFxuICBsZWZ0OiAxMi41cmVtO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogcG9wLXVwIDIwMG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fY3JlYXRlVGFza01vZGFsIGRpdiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuM3JlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NTBweCkge1xcbiAgLmxpc3RDb250YWluZXJfX2NyZWF0ZVRhc2tNb2RhbCB7XFxuICAgIGxlZnQ6IDlyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmxpc3RDb250YWluZXJfX2NyZWF0ZVRhc2tNb2RhbCB7XFxuICAgIGxlZnQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICB9XFxufVxcbi5saXN0Q29udGFpbmVyX19jcmVhdGVQcm9qZWN0TW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgaGVpZ2h0OiAyMi41dmg7XFxuICB3aWR0aDogMjIuNXZ3O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRvcDogNy41cmVtO1xcbiAgbGVmdDogMTcuNXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IHBvcC11cCAyMDBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NTBweCkge1xcbiAgLmxpc3RDb250YWluZXJfX2NyZWF0ZVByb2plY3RNb2RhbCB7XFxuICAgIGxlZnQ6IDEycmVtO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcC11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIGhlaWdodDogODV2aDtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgbWF4LXdpZHRoOiAxODAwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOS41JSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjhmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS4xNWZyIDRmcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNmZyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41JSk7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2JvaWxlcnBsYXRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxpdGllcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXRzL19zaWRlQmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dHMvX2xpc3RDb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0cy9fY29udGFpbmVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7OztFQUdDLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLHVDRUNjO0VGQWQsdUNFUmU7RUZTZixnQkFBQTtFQUNBLDRCRUNrQjtBREFuQjs7QURDQTtFQUNDLG1DRUh1QjtBREt4Qjs7QURDQTs7RUFFQyx1Q0VUeUI7RUZVekIsNEJFUmtCO0VGU2xCLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQ0VEO0FEREM7O0VBQ0Msd0NBQUE7QUNJRjs7QUREQTtFQUNDLFlBQUE7QUNJRDs7QURGQTtFQUNDLGtCQUFBO0VBQ0EsbUNFM0JjO0FEZ0NmOztBREhBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1Q0VqQ3lCO0VGa0N6Qiw0QkVoQ2tCO0VGaUNsQixvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ01EO0FETEM7RUFDQyxzQkFBQTtBQ09GO0FETEM7RUFDQyxzQkFBQTtBQ09GOztBREpBO0VBQ0MsMEVFckRpQjtFRnNEakIsb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCRWxEdUI7QUR5RHhCOztB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QTtFQUNBLHlGQUFBO0VBRUEsU0FBQTtFQUNBLGFBQUE7RUFFQSxVQUFBO0VBQ0EsNENBQUE7QUpnTkY7QUkvTUU7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUppTkg7QUkvTUU7RUFyQkQ7SUFzQkUsVUFBQTtFSmtORDtBQUNGO0FJak5FO0VBeEJEO0lBeUJFLFlBQUE7SUFDQSxXQUFBO0VKb05EO0FBQ0Y7QUlsTkM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNIak1hO0VHa01iLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0FKb05GO0FJbk5FO0VBYkQ7SUFjRSxXQUFBO0VKc05EO0FBQ0Y7QUlwTkM7RUFDQztJQUNDLG1CQUFBO0VKc05EO0VJcE5BO0lBQ0MsbUJBQUE7RUpzTkQ7QUFDRjs7QUtsYkE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FMcWJEO0FLbmJDO0VBVkQ7SUFXRSwwQkFBQTtJQUNBLDZCQUFBO0lBQ0EsMkJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFTHNiQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrQmx1ZTtcXG5cXHRmb250LWZhbWlseTogJGJhc2VGb250U3R5bGU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWU7XFxufVxcbmlucHV0IHtcXG5cXHRhY2NlbnQtY29sb3I6ICRMaWdodEdyYXlpc2hCbHVlSG92ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrRGVzYXR1cmF0ZWRCbHVlO1xcblxcdGNvbG9yOiAkTGlnaHRHcmF5aXNoQmx1ZTtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRyYW5zaXRpb246IGFsbCA0NTBtcyBlYXNlLWluLW91dDtcXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRvdXRsaW5lOiAycHggc29saWQgJEJyaWdodEJsdWU7XFxuXFx0fVxcbn1cXG50ZXh0YXJlYSB7XFxuXFx0cmVzaXplOiBub25lO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0YWNjZW50LWNvbG9yOiAkVmVyeURhcmtCbHVlO1xcbn1cXG5idXR0b24ge1xcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRwYWRkaW5nOiAwLjZyZW0gMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkVmVyeURhcmtEZXNhdHVyYXRlZEJsdWU7XFxuXFx0Y29sb3I6ICRMaWdodEdyYXlpc2hCbHVlO1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcblxcdH1cXG5cXHQmOmFjdGl2ZSB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG5cXHR9XFxufVxcbi5jb3B5cmlnaHRUZXh0IHtcXG5cXHRiYWNrZ3JvdW5kOiAkQ2hlY2tCYWNrZ3JvdW5kO1xcblxcdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANDAwOzYwMDs3MDAmZmFtaWx5PU1hcmNrK1NjcmlwdCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYWNjZW50LWNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxudGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgY29sb3I6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCA0NTBtcyBlYXNlLWluLW91dDtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgaHNsKDIyMGRlZywgOTglLCA2MSUpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGFjY2VudC1jb2xvcjogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjQlLCAxOSUpO1xcbiAgY29sb3I6IGhzbCgyMzZkZWcsIDMzJSwgOTIlKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbn1cXG5cXG4uY29weXJpZ2h0VGV4dCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDE5MmRlZywgMTAwJSwgNjclKSwgaHNsKDI4MGRlZywgODclLCA2NSUpKTtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDE5MmRlZywgMTAwJSwgNjclKSwgaHNsKDI4MGRlZywgODclLCA2NSUpKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biA0NTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG4gIG1pbi1oZWlnaHQ6IDE3dmg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEydmg7XFxuICB9XFxuICAuaGVhZGVyOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgfVxcbn1cXG4uaGVhZGVyX190aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uc2lkZUJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDI0JSwgMTklKTtcXG4gIGdhcDogMXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTYwcHgpIHtcXG4gIC5zaWRlQmFyIHtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuc2lkZUJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlQmFyIC5yZXNwb25zaXZlU2lkZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyO1xcbiAgaGVpZ2h0OiA4M3ZoO1xcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNpZGVCYXIgLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBjb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbn1cXG4uc2lkZUJhcl9fdGl0bGUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTJkZWcsIDEwMCUsIDY3JSksIGhzbCgyODBkZWcsIDg3JSwgNjUlKSk7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGNvbG9yOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLnNpZGVCYXJfX3VwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbn1cXG4uc2lkZUJhcl9fdGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC44NXJlbSAwLjNyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAzNTBtcyBlYXNlLWluLW91dCAxIG5vcm1hbDtcXG59XFxuLnNpZGVCYXJfX3RhYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBjb2xvcjogaHNsKDIzNGRlZywgMzklLCA4NSUpO1xcbn1cXG4uc2lkZUJhcl9fdGFiIC5kZWxJY29uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XFxufVxcbi5zaWRlQmFyX190YWIgLmRlbEljb246aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG4uc2lkZUJhcl9fcHJvamVjdCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbiAgbWF4LWhlaWdodDogMTVyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uc2lkZUJhcl9fcHJvamVjdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDdweDtcXG59XFxuLnNpZGVCYXJfX3Byb2plY3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLnNpZGVCYXJfX3Byb2plY3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNpZGVCYXJfX2FkZFByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlQmFyX19hZGRQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyNCUsIDE5JSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAxZnI7XFxuICB6LWluZGV4OiAwO1xcbiAgbWF4LWhlaWdodDogNjZ2aDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmxpc3RDb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RzIHtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjY1cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbiAgbWF4LWhlaWdodDogNjV2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDdweDtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM0ZGVnLCAzOSUsIDg1JSk7XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNWRlZywgMjElLCAxMSUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5saXN0Q29udGFpbmVyX19saXN0cyB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICB9XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0SXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciA0ZnIgMC41ZnIgMS42ZnIgMC41ZnIgMC41ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTE2MHB4KSB7XFxuICAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIGlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIHAge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG1heC13aWR0aDogNjAlO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmVkaXRJY29uLCAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmRlbEljb24sIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSAudGFza0RldGFpbHMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmVkaXRJY29uOmhvdmVyLCAubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmRlbEljb246aG92ZXIsIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSAudGFza0RldGFpbHM6aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSAuZWRpdEljb24sIC5saXN0Q29udGFpbmVyX19saXN0SXRlbSAuZGVsSWNvbiwgLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC50YXNrRGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmVkaXRJY29uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLmRlbEljb24ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5lZGl0SWNvbiwgLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5kZWxJY29uIHtcXG4gICAgaGVpZ2h0OiAyMi41cHg7XFxuICB9XFxufVxcbi5saXN0Q29udGFpbmVyX19saXN0SXRlbSAuZGF0ZUNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmxpc3RDb250YWluZXJfX2xpc3RJdGVtIC5kYXRlQ29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWF4LXdpZHRoOiA3cmVtO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fbGlzdEl0ZW0gLnRhc2tEZXRhaWxzIHtcXG4gIHJpZ2h0OiAxNXJlbTtcXG4gIHRvcDogMC43cmVtO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIyMGRlZywgOTglLCA2MSUpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fYWRkVGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5saXN0Q29udGFpbmVyX19hZGRUYXNrX19hZGRCdG4ge1xcbiAgYmFja2dyb3VuZDogaHNsKDIzNmRlZywgMzMlLCA5MiUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDEuNXJlbTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubGlzdENvbnRhaW5lcl9fYWRkVGFza19fYWRkQnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgcm90YXRlKDkwZGVnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzRkZWcsIDM5JSwgODUlKTtcXG59XFxuLmxpc3RDb250YWluZXJfX2NyZWF0ZVRhc2tNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMzVkZWcsIDIxJSwgMTElKTtcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogMzB2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAycHggNnB4IDJweDtcXG4gIHRvcDogMnJlbTtcXG4gIGxlZnQ6IDEyLjVyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgYW5pbWF0aW9uOiBwb3AtdXAgMjAwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxufVxcbi5saXN0Q29udGFpbmVyX19jcmVhdGVUYXNrTW9kYWwgZGl2IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KSB7XFxuICAubGlzdENvbnRhaW5lcl9fY3JlYXRlVGFza01vZGFsIHtcXG4gICAgbGVmdDogOXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubGlzdENvbnRhaW5lcl9fY3JlYXRlVGFza01vZGFsIHtcXG4gICAgbGVmdDogMi41cmVtO1xcbiAgICB3aWR0aDogNzB2dztcXG4gIH1cXG59XFxuLmxpc3RDb250YWluZXJfX2NyZWF0ZVByb2plY3RNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBoc2woMjM1ZGVnLCAyMSUsIDExJSk7XFxuICBoZWlnaHQ6IDIyLjV2aDtcXG4gIHdpZHRoOiAyMi41dnc7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdG9wOiA3LjVyZW07XFxuICBsZWZ0OiAxNy41cmVtO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogcG9wLXVwIDIwMG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KSB7XFxuICAubGlzdENvbnRhaW5lcl9fY3JlYXRlUHJvamVjdE1vZGFsIHtcXG4gICAgbGVmdDogMTJyZW07XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcG9wLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBtYXgtd2lkdGg6IDE4MDBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5LjUlKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuOGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjE1ZnIgNGZyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA2ZnI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3LjUlKTtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB3aWR0aDogOTB2dztcXG4gIH1cXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANDAwOzYwMDs3MDAmZmFtaWx5PU1hcmNrK1NjcmlwdCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBmb250IHN0eWxlc1xcbiRiYXNlRm9udFN0eWxlOiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4vLyBwcmltYXJ5IGNvbG9yc1xcbiRCcmlnaHRCbHVlOiBoc2woMjIwLCA5OCUsIDYxJSk7XFxuJENoZWNrQmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgxOTIsIDEwMCUsIDY3JSksIGhzbCgyODAsIDg3JSwgNjUlKSk7XFxuJGxpZ2h0QXF1YTogIzIyZDNlZTtcXG5cXG4vLyBkYXJrbW9kZSBjb2xvcnNcXG4kVmVyeURhcmtCbHVlOiBoc2woMjM1LCAyMSUsIDExJSk7XFxuJFZlcnlEYXJrRGVzYXR1cmF0ZWRCbHVlOiBoc2woMjM1LCAyNCUsIDE5JSk7XFxuJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjogaHNsKDIzNCwgMzklLCA4NSUpO1xcbiRMaWdodEdyYXlpc2hCbHVlOiBoc2woMjM2LCAzMyUsIDkyJSk7XFxuJERhcmtHcmF5aXNoQmx1ZTogaHNsKDIzNCwgMTElLCA1MiUpO1xcbiRWZXJ5RGFya0dyYXlpc2hCbHVlOiBoc2woMjMzLCAxNCUsIDM1JSk7XFxuJFZlcnlEYXJrR3JheWlzaEJsdWU6IGhzbCgyMzcsIDE0JSwgMjYlKTtcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG5cXG4uaGVhZGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAkQ2hlY2tCYWNrZ3JvdW5kO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRncmlkLWNvbHVtbjogMi8zO1xcblxcdGdyaWQtcm93OiAxLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbmltYXRpb246IHNsaWRlLWRvd24gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFx0bWluLWhlaWdodDogMTd2aDtcXG5cXG5cXHRAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMnZoO1xcblxcdFxcdCY6OmJlZm9yZSB7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9fdGl0bGUge1xcblxcdFxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAycmVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdFxcdC8vIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0fVxcblxcdEBrZXlmcmFtZXMgc2xpZGUtZG93biB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0fVxcblxcdFxcdDQwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdFxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXNcXFwiIGFzICo7XFxuXFxuLnNpZGVCYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkVmVyeURhcmtEZXNhdHVyYXRlZEJsdWU7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGdyaWQtY29sdW1uOiAxLzI7XFxuXFx0Z3JpZC1yb3c6IDEvMztcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkTGlnaHRHcmF5aXNoQmx1ZTtcXG5cXHRwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtaW4gNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xcblxcdFxcdGdhcDogMC41cmVtO1xcblxcdFxcdC8vIHBhZGRpbmc6IDAuM3JlbTtcXG5cXHRcXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5yZXNwb25zaXZlU2lkZSB7XFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcblxcdFxcdHotaW5kZXg6IDI7XFxuXFx0XFx0aGVpZ2h0OiBjYWxjKDY2dmggKyAxN3ZoKTtcXG5cXHR9XFxuXFx0QGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0fVxcblxcdFxcdDQwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcblxcdFxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmIC5hY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICRWZXJ5RGFya0JsdWU7XFxuXFx0XFx0Y29sb3I6ICRMaWdodEdyYXlpc2hCbHVlSG92ZXI7XFxuXFx0fVxcblxcdCZfX3RpdGxlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkQ2hlY2tCYWNrZ3JvdW5kO1xcblxcdFxcdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRcXHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG5cXHRcXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMnB4O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdH1cXG5cXG5cXHQmX191cHBlciB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJExpZ2h0R3JheWlzaEJsdWU7XFxuXFx0fVxcblxcblxcdCZfX3RhYiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRwYWRkaW5nOiAwLjg1cmVtIDAuM3JlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdFxcdC8vIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcblxcdFxcdGFuaW1hdGlvbjogc2xpZGUtaW4gMzUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRcXHRjb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHRcXHR9XFxuXFx0XFx0JiAuZGVsSWNvbiB7XFxuXFx0XFx0XFx0aGVpZ2h0OiAyNXB4O1xcblxcdFxcdFxcdHRyYW5zaXRpb246IGluaGVyaXQ7XFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMC44O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX3Byb2plY3Qge1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkTGlnaHRHcmF5aXNoQmx1ZTtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAxNXJlbTtcXG5cXHRcXHRvdmVyZmxvdzogYXV0bztcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuXFx0XFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdFxcdFxcdHdpZHRoOiA3cHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRWZXJ5RGFya0JsdWU7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0Jl9fYWRkUHJvamVjdCB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdG1hcmdpbjogMS41cmVtIDAgMC41cmVtO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRjb2xvcjogJGxpZ2h0QXF1YTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllc1xcXCIgYXMgKjtcXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuXFx0Z3JpZC1jb2x1bW46IDIvMztcXG5cXHRncmlkLXJvdzogMi8zO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRWZXJ5RGFya0Rlc2F0dXJhdGVkQmx1ZTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAxZnI7XFxuXFx0ei1pbmRleDogMDtcXG5cXHRtYXgtaGVpZ2h0OiA2NnZoO1xcblxcdC8vIG92ZXJmbG93OiBhdXRvO1xcblxcdC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXHRAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXG5cXHRhbmltYXRpb246IHNsaWRlLXVwIDQ1MG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcblxcdEBrZXlmcmFtZXMgc2xpZGUtdXAge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAwcHgpO1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0fVxcblxcdFxcdDQwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmX19saXN0cyB7XFxuXFx0XFx0cGFkZGluZzogMXJlbSAycmVtO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IDAuNjVyZW07XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcblxcdFxcdG1heC1oZWlnaHQ6IDY1dmg7XFxuXFx0XFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRcXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0XFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdFxcdFxcdHdpZHRoOiA3cHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAkTGlnaHRHcmF5aXNoQmx1ZUhvdmVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0fVxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcdFxcdFxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRcXHRcXHRmb250LXNpemU6IDAuN3JlbTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCZfX2xpc3RJdGVtIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJFZlcnlEYXJrQmx1ZTtcXG5cXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgNGZyIDAuNWZyIDEuNmZyIDAuNWZyIDAuNWZyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0cGFkZGluZzogMC43cmVtO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLW91dDtcXG5cXHRcXHRhbmltYXRpb246IHNsaWRlLWxlZnQgNDUwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xcblxcdFxcdFxcdHBhZGRpbmc6IDAuM3JlbTtcXG5cXHRcXHRcXHRmb250LXNpemU6IDAuN3JlbTtcXG5cXHRcXHR9XFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuXFx0XFx0XFx0cGFkZGluZzogMC4zcmVtO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMC43cmVtO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRAa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xcblxcdFxcdFxcdDAlIHtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdDUwJSB7XFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHRcXHRpbnB1dCB7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdH1cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcblxcdFxcdFxcdG1heC13aWR0aDogNjAlO1xcblxcdFxcdH1cXG5cXHRcXHQmIC5lZGl0SWNvbixcXG5cXHRcXHQmIC5kZWxJY29uLFxcblxcdFxcdCYgLnRhc2tEZXRhaWxzIHtcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiBpbmhlcml0O1xcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLW91dDtcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjc7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC42cmVtO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0JiAuZWRpdEljb24ge1xcblxcdFxcdFxcdGhlaWdodDogMjVweDtcXG5cXHRcXHRcXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXHRcXHR9XFxuXFx0XFx0JiAuZGVsSWNvbiB7XFxuXFx0XFx0XFx0aGVpZ2h0OiAyNXB4O1xcblxcdFxcdFxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmIC5lZGl0SWNvbixcXG5cXHRcXHQmIC5kZWxJY29uIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDIyLjVweDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCYgLmRhdGVDb250YWluZXIge1xcblxcdFxcdFxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdFxcdFxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IGluaGVyaXQ7XFxuXFx0XFx0XFx0XFx0bWF4LXdpZHRoOiA3cmVtO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0XFx0JiAudGFza0RldGFpbHMge1xcblxcdFxcdFxcdHJpZ2h0OiAxNXJlbTtcXG5cXHRcXHRcXHR0b3A6IDAuN3JlbTtcXG5cXHRcXHRcXHRmb250LXNpemU6IGluaGVyaXQ7XFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgJEJyaWdodEJsdWU7XFxuXFx0XFx0XFx0cGFkZGluZzogMC41cmVtO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0Jl9fYWRkVGFzayB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdCZfX2FkZEJ0biB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogJExpZ2h0R3JheWlzaEJsdWU7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdHRvcDogMXJlbTtcXG5cXHRcXHRcXHRyaWdodDogMS41cmVtO1xcblxcdFxcdFxcdGhlaWdodDogNTBweDtcXG5cXHRcXHRcXHR3aWR0aDogNTBweDtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjg7XFxuXFx0XFx0XFx0XFx0Ly8gdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG5cXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpIHJvdGF0ZSg5MGRlZyk7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJExpZ2h0R3JheWlzaEJsdWVIb3ZlcjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmX19jcmVhdGVUYXNrTW9kYWwge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YmFja2dyb3VuZDogJFZlcnlEYXJrQmx1ZTtcXG5cXHRcXHRtYXgtaGVpZ2h0OiA1MHZoO1xcblxcdFxcdHdpZHRoOiAzMHZ3O1xcblxcdFxcdHBhZGRpbmc6IDFyZW07XFxuXFx0XFx0Ym94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCxcXG5cXHRcXHRcXHRyZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAycHggNnB4IDJweDtcXG5cXHRcXHR0b3A6IDJyZW07XFxuXFx0XFx0bGVmdDogMTIuNXJlbTtcXG5cXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdGFuaW1hdGlvbjogcG9wLXVwIDIwMG1zIGVhc2UtaW4tb3V0IDEgbm9ybWFsO1xcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiAwLjNyZW07XFxuXFx0XFx0fVxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxNDUwcHgpIHtcXG5cXHRcXHRcXHRsZWZ0OiA5cmVtO1xcblxcdFxcdH1cXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXHRcXHRcXHRsZWZ0OiAyLjVyZW07XFxuXFx0XFx0XFx0d2lkdGg6IDcwdnc7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmX19jcmVhdGVQcm9qZWN0TW9kYWwge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkVmVyeURhcmtCbHVlO1xcblxcdFxcdGhlaWdodDogMjIuNXZoO1xcblxcdFxcdHdpZHRoOiAyMi41dnc7XFxuXFx0XFx0cGFkZGluZzogMXJlbTtcXG5cXHRcXHR0b3A6IDcuNXJlbTtcXG5cXHRcXHRsZWZ0OiAxNy41cmVtO1xcblxcdFxcdHotaW5kZXg6IDE7XFxuXFx0XFx0YW5pbWF0aW9uOiBwb3AtdXAgMjAwbXMgZWFzZS1pbi1vdXQgMSBub3JtYWw7XFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDE0NTBweCkge1xcblxcdFxcdFxcdGxlZnQ6IDEycmVtO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0QGtleWZyYW1lcyBwb3AtdXAge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcdFxcdH1cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzXFxcIiBhcyAqO1xcblxcbi5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXG5cXHRoZWlnaHQ6IDg1dmg7XFxuXFx0d2lkdGg6IDcwdnc7XFxuXFx0bWF4LXdpZHRoOiAxODAwcHg7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkuNSUpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuOGZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMS4xNWZyIDRmcjtcXG5cXG5cXHRAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDZmcjtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41JSk7XFxuXFx0XFx0aGVpZ2h0OiA4NXZoO1xcblxcdFxcdHdpZHRoOiA5MHZ3O1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3Njc3Mvc3R5bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IHRhc2tDb21wbGV0ZSBmcm9tIFwiLi9jb21wbGV0ZVRhc2tcIjtcbmltcG9ydCBkZWZhdWx0VGFiIGZyb20gXCIuL2RlZmF1bHRUYWJcIjtcbmltcG9ydCB0YWJzIGZyb20gXCIuL3RhYnNcIjtcblxuLy8gY29uc29sZS5sb2coXCJ3ZWJwYWNrIGhlcmVcIik7XG5cbnRhYnMoKTtcbmRlZmF1bHRUYWIoKTtcbi8vIHRhc2tDb21wbGV0ZSgpO1xuIl0sIm5hbWVzIjpbImxvY2FsIiwic3RvcmFnZSIsInRhc2tTdGF0dXNIYW5kbGVyIiwiZSIsInBhcmVudERpdiIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJ0YXNrSW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJjaGVja2VkIiwiaW5ib3giLCJzdGF0dXMiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwib3BhY2l0eSIsInVwZGF0ZUxvY2FsVG9kbyIsImhhbmRsZUV2ZW50IiwidGFza0l0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwidGFza0NvbXBsZXRlQ2hlY2siLCJsaXN0SXRlbXMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidGFzayIsImZpcnN0Q2hpbGQiLCJ0YXNrQ29tcGxldGUiLCJ0YXNrQ2hlY2tib3giLCJkb20iLCJtYWtlQWN0aXZlIiwiaW5ib3hUYWIiLCJnZXRFbGVtZW50QnlJZCIsImFsbFByb2plY3RzIiwiaXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRlZmF1bHRUYWIiLCJjbGVhclRhc2tTY3JlZW4iLCJjdXJyZW50IiwiY3JlYXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFRvZG9BcnJheSIsIkpTT04iLCJwYXJzZSIsImRpc3BsYXlUb0RvbSIsImZvcm1hdCIsImRlbGV0ZUltYWdlIiwiZWRpdEltYWdlIiwiY2hlY2tUYXNrQ29tcGxldGUiLCJ0YXNrTW9kYWwiLCJhZGRUYXNrQnRuIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJzaWRlQmFyIiwiZWRpdFRhc2tCdG4iLCJ0YXNrVGl0bGUiLCJ0YXNrRGVzYyIsInRhc2tEdWUiLCJwcmlvcml0eVJhZGlvcyIsImdldEVsZW1lbnRzQnlOYW1lIiwicmVzZXRGb3JtcyIsInJlYWRPbmx5IiwidmFsdWUiLCJyYWRpb3MiLCJyYWRpbyIsImRpc2FibGVkIiwicmVzZXRUYXNrU2NyZWVuIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXkiLCJ0YXNrQXJyYXkiLCJjbG9zZVRhc2tNb2RhbCIsImNsaWNrRGV0YWlsIiwiY29udGFpbnMiLCJvdXRzaWRlQ2xpY2siLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmV3VGFza01vZGFsIiwiZm9jdXMiLCJkZXRhaWxFZGl0TW9kYWwiLCJzaG93RGV0YWlscyIsInRhc2tEZXRhaWxzIiwidGFza09iaiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJkb21GYWN0b3J5IiwiaW5kZXgiLCJkaXZJdGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvcmRlckxlZnQiLCJpbnB1dENoZWNrIiwidHlwZSIsInBhcmEiLCJ0ZXh0Q29udGVudCIsImRhdGVDb250YWluZXIiLCJkYXRlIiwiZm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJhcHBlbmQiLCJkZWxJbWciLCJJbWFnZSIsInNyYyIsImVkaXRJbWciLCJkZWxldGVUYXNrcyIsImVkaXRUYXNrIiwicHJvamVjdE1vZGFsIiwibmV3UHJvamVjdEJ0biIsInJlc2V0UHJvamVjdFNjcmVlbiIsImNsb3NlUHJvamVjdE1vZGFsIiwicmV2ZWFsUHJvamVjdE1vZGFsIiwibWFrZVByb2plY3RBY3RpdmUiLCJwcm9qZWN0Iiwic3RvcmFnZUFycmF5IiwiaW5kZXhPZiIsImNoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwidG9kbyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1cGRhdGVMb2NhbFRhYnMiLCJ0YWJzIiwidGFiIiwiY2hlY2tDb21wbGV0ZVRhc2siLCJwcm9qZWN0QXJyYXkiLCJwcm9qZWN0VGFiIiwiYWRkTG9hZEV2ZW50cyIsInByb2plY3RJdGVtIiwib3V0c2lkZURlbCIsInByb2plY3RQZXJzb25hbEFycmF5IiwiZmlsdGVyIiwiYWRkRGVsZXRlRXZlbnQiLCJkb21BcnJheSIsImRvbUVsZVRvUmVtb3ZlIiwic3BsaWNlIiwicHJvamVjdEZhY3RvcnkiLCJwcm9qZWN0TmFtZSIsImRpc3BsYXlQcm9qZWN0cyIsImFkZFRvQXJyYXkiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RUaXRsZSIsImlzRW1wdHkiLCJwdXNoIiwic3VibWl0UHJvamVjdERhdGEiLCJjcmVhdGVQcm9qZWN0QnRuIiwiY3JlYXRlTmV3UHJvamVjdCIsImxvY2FsVGFiQXJyYXkiLCJUYXNrQ3JlYXRvciIsImNvbnN0cnVjdG9yIiwiY3VycmVudFRhYiIsImRlc2MiLCJkaXYiLCJkZWxldGVGcm9tU3RvcmFnZSIsImVkaXRCdG4iLCJ0YXNrT2JqZWN0IiwidXBkYXRlVGFza0RldGFpbHMiLCJ0YXNrRHVlRGF0ZSIsInRhc2tQcmlvcml0eSIsInN1Ym1pdFRhc2tEYXRhIiwic3VibWl0VGFza0J0biIsImNyZWF0ZVRhc2siXSwic291cmNlUm9vdCI6IiJ9