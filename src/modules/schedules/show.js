import dayjs from "dayjs";

const periodMorning = document.querySelector(".morning .list-schedules ul");
const periodSunset = document.querySelector(".sunset .list-schedules ul");
const periodNight = document.querySelector(".night .list-schedules ul");

export function scheduleShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = ""
    periodSunset.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach((schedule) => {
      const item = `
                      <li data-id="${schedule.id}">
                        <div>
                          <span class="hour"> ${dayjs(schedule.when).format("HH:mm")} </span>
                          <span class="pacient">
                            <strong>${schedule.pet}</strong>
                            <span class="name">/ ${schedule.tutor}</span>
                          </span>
                        </div>
                        <span class="service"> ${schedule.description} </span>
                        <span class="cancel">Remover agendamento</span>
                      </li>
      `

      const hour = dayjs(schedule.when).hour()

      if (hour <= 12) {
        periodMorning.innerHTML += item
      } else if (hour > 12 && hour <= 18) {
        periodSunset.innerHTML += item
      } else {
        periodNight.innerHTML += item
      }
    })
  }
  catch (e) {

  }
}