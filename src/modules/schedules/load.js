import { fetchSchedule } from "../../services/schedule-fetch.js";
import { hoursLoad } from "../form/hours-load.js"

import { scheduleShow } from "./show.js";

const selectedDate = document.getElementById("date");

export async function scheduleDays() {
  const date = selectedDate.value
  const dailySchedules = await fetchSchedule({ date })

  scheduleShow({ dailySchedules })
  hoursLoad({ date, dailySchedules })

}

const selectedDay = document.getElementById("date-input")
export async function schedulesMain() {
  const date = selectedDay.value
  const dailySchedules = await fetchSchedule({ date })

  scheduleShow({ dailySchedules })
  hoursLoad({ date, dailySchedules })

}