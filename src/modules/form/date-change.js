import { scheduleDays } from "../schedules/load.js"
import { hourEvent } from "./hour-input.js"


const hour = document.querySelector(".select-selected")
const scheduleDate = document.getElementById("date-input")
const selectedDate = document.getElementById("date")
const hours = document.querySelector(".select-items")

selectedDate.onchange = () => {
  hours.innerHTML = ``
  hour.innerHTML = "--:--"

  scheduleDays()
  hourEvent()
}

scheduleDate.onchange = () => {
  scheduleDays()
}