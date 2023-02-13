const storage = (() => {
	const inbox = [
		{
			title: "Test Task 1",
			tab: "Inbox",
			description: "This is test task 1",
			dueDate: "2023-02-16",
			priority: "High",
			staus: "Incomplete",
		},
		{
			title: "Test Task 2",
			tab: "Inbox",
			description: "This is test task 2",
			dueDate: "2023-02-17",
			priority: "Medium",
			staus: "Incomplete",
		},
	];
	return {
		inbox,
	};
})();

export default storage;
