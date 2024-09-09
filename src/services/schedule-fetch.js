import { alertMsg } from "../modules/alerts/show.js";
import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function fetchSchedule({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
  } catch (e) {
    alertMsg("error", "Ocorreu um erro ao buscar agendamentos.")
    console.log(e)
  }

}