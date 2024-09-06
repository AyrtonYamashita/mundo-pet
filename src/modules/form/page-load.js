import { scheduleDays } from "../schedules/load.js"
import { fetchSchedule } from "../../services/schedule-fetch.js"
document.addEventListener("DOMContentLoaded", () => {
  scheduleDays()
})