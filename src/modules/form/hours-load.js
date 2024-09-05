import { openingHours } from "../../utils/opening-hour.js"
import { hourEvent } from "./show-hours.js"
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
    if (available) {
      hours.append(div)
    }
  })

  hourEvent()

}

