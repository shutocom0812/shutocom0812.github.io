let themeIndex = 0;
let themes = [
  ["#021e1e", "#e4dad9", "#e1a600"],	//Tokyo-Light
  ["#e4dad9", "#021e1e", "#e1a600"],	//Tokyo-Dark
  ["#473857", "#e8c9c7", "#149684"],	//Kure-Light
  ["#e8c9c7", "#473857", "#149684"],	//Kure-Dark
  ["#005051", "#fffafc", "#95bf43"],	//Uji-Light
  ["#fffafc", "#005051", "#95bf43"],	//Uji-Dark
  ["#1086e3", "#edfafd", "#3ddad7"],	//Amami-Light
  ["#edfafd", "#1086e3", "#3ddad7"]	//Amami-Dark
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
  Button.addEventListener("click", function () { themeChange(); }, false);
  document.querySelector("body").appendChild(Button);
}

function themeChange() {
  themeIndex = (themeIndex >= themes.length - 1) ? 0 : themeIndex + 1;
  themes[themeIndex].forEach((color, index) => Root.style.setProperty(`--color${index + 1}`, color));
  localStorage.setItem("theme", themeIndex);
  console.log(themeIndex);
}

themeFirst();
themeButton();