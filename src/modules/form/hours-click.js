export function hoursClick() {
  const hours = document.querySelectorAll("select-items div")

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      console.log(selected.target)
    })
  })
}