import storage from "./storage";
import task from "./task";

export default function defaultTab() {
	task.clearTaskScreen();
	task.create();
	task.displayToDom(storage.inbox);
}
