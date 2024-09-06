const selected = document.querySelector(".select-selected");
const items = document.querySelector(".select-items");

export function hourEvent() {
  selected.addEventListener("click", () => {
    selected.classList.toggle("select-arrow-active");
    items.classList.toggle("select-hide");
  })

  const options = document.querySelectorAll(".item-available");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.textContent = option.textContent;
      selected.classList.remove("select-arrow-active");
      items.classList.add("select-hide")
    })
  })

  document.addEventListener("click", (e) => {
    if (!selected.contains(e.target)) {
      selected.classList.remove("select-arrow-active");
      items.classList.add("select-hide")
    }
  })

}

