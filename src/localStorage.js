function updateLocalTodo(todo) {
	localStorage.setItem("todo", JSON.stringify(todo));
}
function updateLocalTabs(tabs) {
	localStorage.setItem("tabs", JSON.stringify(tabs));
}
export default (function local() {
	return {
		updateLocalTodo,
		updateLocalTabs,
	};
})();
