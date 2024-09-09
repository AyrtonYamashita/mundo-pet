const popup_form = document.querySelector(".form-popup");
const close_form = document.querySelector("svg");
const new_schedule = document.querySelector(".new-schedule")

new_schedule.addEventListener("click", () => {
  popup_form.classList.toggle("show-form")
  document.querySelector("main").style.filter = " grayscale(1) blur(10px)";
  document.querySelector(".new-schedule").style.opacity = 0;
})

close_form.onclick = () => {
  resetPage()
}


export function resetPage() {
  const popup_form = document.querySelector(".form-popup");
  popup_form.classList.remove("show-form")
  document.querySelector("main").style.filter = "";
  document.querySelector(".new-schedule").style.opacity = 1;
}

