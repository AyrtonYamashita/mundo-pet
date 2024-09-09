import { apiConfig } from "./api-config";

export async function scheduleDelete({ id }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento cancelado com sucesso!")
  } catch (e) {
    alert("Ocorreu um erro ao cancelar o agendamento.")
    console.log(e)
  }
}