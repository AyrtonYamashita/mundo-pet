import { apiConfig } from "./api-config.js"
import { alertMsg } from "../modules/alerts/show.js"

export async function newSchedule({ schedule }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(schedule)
    })

    alertMsg("success", "Agendamento realizado com sucesso!")
  } catch (error) {
    alertMsg("error", "Ocorreu um erro ao realizar o agendamento.")
    console.log(error)
  }

}