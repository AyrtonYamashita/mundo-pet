const popup_form = document.querySelector(".form-popup");
const close_form = document.querySelector("svg")

document.querySelector(".new-schedule").addEventListener("click", () => {
  popup_form.style.display = "block";
  popup_form.style.opacity = 1;
  popup_form.style.scale = 1;
  popup_form.style.filter = "drop-shadow(0 0 50px #9282fa69)";

  document.querySelector("main").style.filter = " grayscale(1) blur(10px)";
  document.querySelector(".new-schedule").style.opacity = 0;
})

close_form.onclick = () => {
  resetPage()
}

function resetPage() {
  popup_form.style.opacity = 0;
  popup_form.style.filter.remove;

  document.querySelector("main").style.filter = "";
  document.querySelector(".new-schedule").style.opacity = 1;
}

