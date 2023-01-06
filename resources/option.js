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
			document.body.appendChild(ModalBack);
		}
		function runModal() {
			document.getElementById("modalBack").classList.remove("close");
		}

		function createToast() {
			const Toast = document.createElement("span");
			Toast.id = "toast";
			Toast.classList.add("toast", "close");
			document.body.appendChild(Toast);
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
