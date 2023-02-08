import storage from "./storage";
import task from "./task";

export default function defaultTab() {
	task.create();
	task.displayToDom(storage.inbox);
}
