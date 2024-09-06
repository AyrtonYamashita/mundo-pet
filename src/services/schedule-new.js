import { apiConfig } from "./api-config.js"

export async function newSchedule({ schedule }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(schedule)
    })

    alert("Agendamento realizado com sucesso")
  } catch (error) {
    alert("Ocorreu um erro ao registrar o agendamento... Tente novamente mais tarde.")
    console.log(error)
  }

}