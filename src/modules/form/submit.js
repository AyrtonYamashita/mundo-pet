import dayjs from "dayjs";
import { resetPage } from "./show-form.js"
import { newSchedule } from "../../services/schedule-new.js";
const form = document.querySelector("form")
const scheduleDate = document.querySelector("#date-input")
const selectedDate = document.getElementById("date")
const tutorName = document.querySelector("#name-tutor")
const petName = document.querySelector("#name-pet")
const phone = document.querySelector("#phone")
const desc = document.querySelector("#description")
const hourSelected = document.querySelector(".select-selected")



const today = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = today
selectedDate.min = today
scheduleDate.value = today
scheduleDate.min = today


form.onsubmit = (e) => {
  e.preventDefault()
  try {
    const tutor = tutorName.value.trim()
    const pet = petName.value.trim()
    const contact = phone.value.trim()
    const description = desc.value.trim()
    const schedule_hour = hourSelected.innerText

    if (!tutor) {
      return alert("Informe o nome do tutor!")
    }
    if (!pet) {
      return alert("Informe o nome do pet!")
    }
    if (!contact) {
      return alert("Informe um contato!")
    }
    if (!description) {
      return alert("Informe a descrição do serviço!")
    }
    if (schedule_hour === "" || schedule_hour === "--:--") {
      return alert("Selecione a hora!")
    }

    const [hour] = hourSelected.innerText.split(":")
    const when = dayjs(selectedDate.value).add(hour, "hour")
    const id = new Date().getTime().toString()

    resetPage()

    tutorName.value = ""
    petName.value = ``
    phone.value = ``
    desc.value = ``
    hourSelected.innerText = "--:--"

    const schedule = {
      id, tutor, pet, description, contact, when
    }

    newSchedule({ schedule })

  } catch (e) {
    alert("Não foi possível realizar o agendamento")
    console.log(e)
  }
}