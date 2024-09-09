import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function fetchSchedule({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
  } catch (e) {
    alert("Ocorreu um erro ao buscar os agendamentos do dia selecionado...")
    console.log(e)
  }

}