import dayjs from "dayjs";
const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")

const today = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = today
selectedDate.min = today


form.onsubmit = (e) => {
  e.preventDefault()
  console.log("Enviado!")
}