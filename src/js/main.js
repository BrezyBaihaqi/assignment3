import confetti from "canvas-confetti";
import Typed from "typed.js";

let welcomePage = document.getElementById("welcomepage");
const confettiBtn = document.getElementById("confettiBtn");
// const exitButton = document.getElementById("exit-button");

// const typed = new Typed("#welcomepage", {
//   strings: [
//     "tes, apakah ini berhasil",
//     "tes, apakah ini tidak",
//     "tes, apakah gatau",
//   ],
//   typeSpeed: 50,
//   loop: true,
//   backSpeed: 25,
//   smartBackspace: true,
//   showCursor: false,
// });

const exitBtn = document.createElement("button");
exitBtn.className = "exit-button";
exitBtn.textContent = "clear";

welcomePage.append(exitBtn);

exitBtn.addEventListener("click", () => {
  welcomePage.style.display = "none";
});

welcomePage.style.display = "block";

const myCanvas = document.createElement("canvas");

myCanvas.style.width = "100vw";
myCanvas.style.width = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;

document.body.appendChild(myCanvas);

confettiBtn.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 1000,
    spread: 300,
  });
});
