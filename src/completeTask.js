export default function taskComplete() {
	const taskCheckbox = document.querySelectorAll(".taskCheckbox");
	taskCheckbox.forEach((taskItem) => {
		taskItem.addEventListener("click", (e) => {
			const siblingPara = e.target.nextSibling;
			const parentDiv = e.target.parentElement;

			if (siblingPara.style.textDecoration === "line-through") {
				siblingPara.style.textDecoration = "none";
				parentDiv.style.opacity = "1";
			} else {
				siblingPara.style.textDecoration = "line-through";
				parentDiv.style.opacity = "0.6";
			}
		});
	});
}
