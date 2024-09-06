import { openingHours } from "../../utils/opening-hour.js"
import { hourEvent } from "./hour-input.js"
import dayjs from "dayjs"


const hours = document.querySelector(".select-items")

export function hoursLoad({ date }) {

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return {
      hour,
      available: isHourPast
    }
  })

  opening.forEach(({ hour, available }) => {
    const div = document.createElement("div")
    div.textContent = hour
    div.classList.add(available ? "item-available" : "item-not-available")
    hours.append(div)
  })

  hourEvent()

}

