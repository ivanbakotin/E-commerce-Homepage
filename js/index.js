const slides = document.querySelectorAll(".slide");
const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");

let active = 0;

for (let i = 0; i < 3; i++) {
  prev[i].addEventListener("click", () => {
    slides[i].classList.toggle("active")
    slides[i ? i - 1 : 2].classList.toggle("active")
  })

  next[i].addEventListener("click", () => {
    slides[i].classList.toggle("active")
    slides[i > 1 ? 0 : i + 1].classList.toggle("active")
  })
}