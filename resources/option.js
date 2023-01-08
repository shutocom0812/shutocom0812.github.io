//MODAL WINDOW
function createModal() {
	const ModalBack = document.createElement("div");
	ModalBack.id = "modalBack";
	ModalBack.classList.add("modal-back", "close");
	ModalBack.addEventListener("click", function() {this.classList.add("close");});

	const ModalWindow = document.createElement("div");
	ModalWindow.id = "modalWindow";
	ModalWindow.classList.add("modal-window");
	ModalWindow.addEventListener("click", function(){event.stopPropagation();});

	ModalBack.appendChild(ModalWindow);
	document.getElementById("navOption").appendChild(ModalBack);
}
function runModal() {
	document.getElementById("modalBack").classList.remove("close");
	const ModalWindow = document.getElementById("modalWindow");
	while (ModalWindow.firstChild) ModalWindow.firstChild.remove();
	for (let i=0; i<arguments.length; i++) {
		ModalWindow.appendChild(arguments[i]);
	}
}

//TOAST MESSAGE
function createToast() {
	const Toast = document.createElement("span");
	Toast.id = "toast";
	Toast.classList.add("toast", "close");
	document.getElementById("navOption").appendChild(Toast);
}
function runToast(target) {
	const Toast = document.getElementById("toast");
	Toast.innerText = target;
	Toast.classList.remove("close");
	setTimeout(() => {
		Toast.innerText = "";
		Toast.classList.add("close");
	}, 2000);
}

export {createModal, runModal, createToast, runToast};
