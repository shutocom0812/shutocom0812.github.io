		let themeIndex = 0;
let themes = [
  ["#021e1e", "#E4DAD9", "#e1a600"],
  ["#E4DAD9", "#021e1e", "#e1a600"],
  ["#473857", "#E8C9C7", "#149684"],
  ["#E8C9C7", "#473857", "#149684"],
  ["#005051", "#fffafc", "#95bf43"],
  ["#fffafc", "#005051", "#95bf43"],
	["#005051", "#fcf6cc", "#a4b059"],
	["#fcf6cc", "#005051", "#a4b059"],
	["#005051", "#fefafb", "#909668"],
	["#fefafb", "#005051", "#909668"]
];
const Root = document.querySelector(":root");

function themeFirst() {
  const nowValue = Number(localStorage.getItem("theme"));
  if (nowValue != null) {
    themes[nowValue].forEach((color, index) => Root.style.setProperty(`--color${index + 1}`, color));
    themeIndex = nowValue;
  } else {
    themes[0].forEach((color, index) => Root.style.setProperty(`--color${index + 1}`, color));
  }
}

function themeButton() {
  const Button = document.createElement("button");
  Button.tyoe = "button";
  Button.id = "themeButton";
  Button.name = "theme";
  Button.classList.add("theme-button");
  Button.tabIndex = -1;
	Button.innerText = themeIndex;
  Button.addEventListener("click", function(){themeChange();}, false);
  document.querySelector("body").appendChild(Button);
}

function themeChange() {
	themeIndex = (themeIndex >= themes.length - 1) ? 0 : themeIndex + 1;
  themes[themeIndex].forEach((color, index) => Root.style.setProperty(`--color${index + 1}`, color));
	document.getElementById("themeButton").innerText = themeIndex;
  localStorage.setItem("theme", themeIndex);
  console.log(themeIndex);
}

themeFirst();
themeButton();
