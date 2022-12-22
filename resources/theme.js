let themeIndex = 0;
let themes = [
  ["#E5996D", "#642327", "#AD4133"],
  ["#642327", "#E5996D", "#AD4133"],
  ["#021e1e", "#E4DAD9", "#e1a600"],
  ["#E4DAD9", "#021e1e", "#e1a600"],
  ["#473857", "#E8C9C7", "#149684"],
  ["#E8C9C7", "#473857", "#149684"],
  ["#bad2ba", "#092837", "#d28859"]
];
const Root = document.querySelector(":root");

function themeFirst() {
  const nowValue = localStorage.getItem("theme");
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
  Button.addEventListener("click", function(){themeChange();}, false);
  document.getElementById("headerNav").appendChild(Button);
}

function themeChange() {
  if (themeIndex >= themes.length - 1) {
    themeIndex = 0;
  } else {
    themeIndex++;
  }
  themes[themeIndex].forEach((color, index) => Root.style.setProperty(`--color${index + 1}`, color));
  localStorage.setItem("theme", themeIndex);
  console.log(themeIndex);
}

themeFirst();
themeButton();
