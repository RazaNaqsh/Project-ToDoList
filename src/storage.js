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
		{
			title: "Test Fam 1",
			tab: "Family",
			description: "This is Fam task 1",
			dueDate: "2023-02-19",
			priority: "Medium",
			staus: "Incomplete",
		},
		{
			title: "Test Pers 1",
			tab: "Personal",
			description: "This is Pers task 1",
			dueDate: "2023-02-21",
			priority: "Medium",
			staus: "Incomplete",
		},
		{
			title: "Test Secret 1",
			tab: "Secret",
			description: "This is Secret task 1",
			dueDate: "2023-02-22",
			priority: "Low",
			staus: "Incomplete",
		},
	];
	return {
		inbox,
	};
})();

export default storage;
