import { openingHours } from "../../utils/opening-hour.js"
import dayjs from "dayjs"


const hours = document.querySelector(".select-items")

export function hoursLoad({ date, dailySchedules }) {
  hours.innerHTML = ``

  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  opening.forEach(({ hour, available }) => {
    const div = document.createElement("div")
    div.textContent = hour
    div.classList.add(available ? "item-available" : "item-not-available")
    hours.append(div)
  })
  const items = document.querySelectorAll(".select-items div")
  const selected = document.querySelector(".select-selected");

  selected.onclick = () => {
    hours.classList.toggle("select-hide")
  }

  items.forEach(item => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      hours.classList.add("select-hide")
    })
  })
}

