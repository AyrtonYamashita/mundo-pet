import dayjs from "dayjs";
import { resetPage } from "./show-form.js"
import { newSchedule } from "../../services/schedule-new.js";
import { scheduleDays } from "../schedules/load.js"
import { alertMsg } from "../alerts/show.js";

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


form.onsubmit = async (e) => {
  e.preventDefault()
  try {

    const tutor = tutorName.value.trim()
    const pet = petName.value.trim()
    const contact = phone.value.trim()
    const description = desc.value.trim()
    const schedule_hour = hourSelected.innerText

    if (!tutor) {
      return alertMsg("error", "Informe o nome do tutor.")
    }
    if (!pet) {
      return alertMsg("error", "Informe o nome do pet.")
    }
    if (!contact) {
      return alertMsg("error", "Insira um contato válido.")
    }
    if (!description) {
      return alertMsg("error", "Informe a descrição do serviço.")
    }
    if (schedule_hour === "" || schedule_hour === "--:--") {
      return alertMsg("error", "Selecione o horário para agendamento.")
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

    await newSchedule({ schedule })
    await scheduleDays()

  } catch (e) {
    alertMsg("error", "Ocorreu um erro ao realizar o agendamento.")
    console.log(e)
  }
}