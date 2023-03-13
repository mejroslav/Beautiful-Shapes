const wrapper = document.getElementById("content-wrapper");
const text = document.getElementById("text-wrapper");
const shapes = document.querySelectorAll(".shape");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const COLORS = [
  [
    "--marigold",
    "--tangerine",
    "--flame",
    "--oxford-blue",
    "--morning-blue",
    "--asparagus",
  ],
  [
    "--red-salsa",
    "--light-yellow",
    "--sky-blue-crayola",
    "--maya-blue",
    "--english-violet",
    "--terra-cotta",
  ],
  [
    "--rosewood",
    "--medium-turquoise",
    "--orange-yellow",
    "--indigo-dye",
    "--kombu-green",
    "--palatinate-purple",
  ],
  [
    "--saffron",
    "--yinmn-blue",
    "--razzmatazz",
    "--mint",
    "--tomato",
    "--melon",
  ],
  [
    "--cerulean",
    "--dark-slate-gray",
    "--eggshell",
    "--orange-crayola",
    "--saffron",
    "--persian-indigo",
  ]
];

setInterval(changeColorTheme, 3000);
setInterval(changeConfiguration, 4000)

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    case "ArrowLeft":
      break;
    case "ArrowRight":
      break;
    case "Escape":
      break;
    case "Shift":
      break;
    case "Control":
      break;
    case "Backspace":
      text.innerText = text.innerText.substring(0, text.innerText.length - 1);
      changeConfiguration();
      break;
    case "Space":
      text.innerText += " ";
      break;
    default:
      text.innerText += e.key;
      changeConfiguration();
      break;
  }
  if (e.code === "Space") text.innerText += "\u00a0";
});


function changeConfiguration() {
  wrapper.dataset.configuration = rand(1, 8);
  wrapper.dataset.roundness = rand(1, 4);
}

function changeColorTheme() {
  const x = rand(0, COLORS.length - 1);
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].style.backgroundColor = `var(${COLORS[x][i]})`;
  }
}
