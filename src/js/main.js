import confetti from "canvas-confetti";
import Typed from "typed.js";

let welcomePage = document.getElementById("welcomepage");
const confettiBtn = document.getElementById("confettiBtn");
const exitButton = document.getElementById("exit-button");
let typedJS = document.querySelector("typedJS");

function doSomething() {
  console.info("DOM Loaded");

  const typed = new Typed("#typedJS", {
    strings: [
      "Raihan Nizar",
      "Bagus Qomaruz Zaman",
      "Fadil Agustiansyah",
      "Agus Setyawan",
      "Alfonsus Ardani",
      "Arif Jayadi",
      "billybriant",
      "Danar Fadila",
      "Darma Paramarta",
      "Dinda Audia R",
      "Faizal Rahmat Nursaori",
      "Fajri Farid",
      "Gilang H",
      "Handy Pratama",
      "Heri Risnanto",
      "I Made Panji Pusaka Suryeswara",
      "karya lingga",
      "Mafatikhul Ilmi",
      "Maya Bunga Maulidiya",
      "Muhamad Arief",
      "Muhamad Rahmahani",
      "Muhammad Adil Raja Saputra",
      "Muhammad Fikry Haykal",
      "Muhammad Rizki KP",
      "Muhammad Apriandito",
      "Muhammad Iqbal",
      "Muhammad Rizky Al-Fatih Nasrullah",
      "Nadhira Hafez",
      "Nor Indah",
      "Reza Rinaldi",
      "Riza Maulana",
      "Rom Adhon",
      "Ronal Yulyanto",
      "Roziyan Hidayat",
      "Tanesya Tresna",
      "Yanuar Arufy",
      "Yusuf Bachtiar",
    ],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25,
    smartBackspace: true,
    showCursor: false,
  });

  exitButton.addEventListener("click", () => {
    document.getElementById("welcomepage").style.display = "none";
  });
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  doSomething();
}

const myCanvas = document.createElement("canvas");

myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.width = "120vw";
myCanvas.style.height = "100vh";
myCanvas.style.pointerEvents = "none";

document.body.appendChild(myCanvas);

exitButton.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 200,
    spread: 900,
    origin: { x: 0.4 },
    shapes: ["star"],
  });
  console.log(myConfetti);
});
