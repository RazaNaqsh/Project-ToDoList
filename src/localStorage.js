function updateLocalStorage(todo, tabs) {
	localStorage.setItem("todo", JSON.stringify(todo));
	localStorage.setItem("tabs", JSON.stringify(tabs));
}
export default (function local() {
	return {
		updateLocalStorage,
	};
})();
