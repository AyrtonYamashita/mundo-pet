import { apiConfig } from "./api-config";
import { alertMsg } from "../modules/alerts/show";

export async function scheduleDelete({ id }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    })

    alertMsg("success", "Agendamento cancelado com sucesso.")
  } catch (e) {
    alertMsg("error", "Ocorreu um erro ao cancelar o agendamento.")
    console.log(e)
  }
}