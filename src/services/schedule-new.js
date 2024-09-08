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
    alert("Ocorreu um erro ao registrar o agendamento... Tente novamente mais tarde.")
    console.log(error)
  }

}