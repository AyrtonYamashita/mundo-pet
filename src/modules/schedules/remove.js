import { scheduleDays } from "./load";
import { scheduleDelete } from "../../services/schedule-delete.js"

const schedules = document.querySelectorAll(".list-schedules");


schedules.forEach((schedule) => {
  schedule.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel")) {
      const item = e.target.closest("li")
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm('Tem certeza que deseja cancelar este agendamento?')
        if (isConfirm) {
          await scheduleDelete({ id })
          scheduleDays()
        }
      }
    }
  })
})
