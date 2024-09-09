export function alertMsg(type, message) {

  const alert_msg = document.querySelector(".alert-msg");
  const icon_msg = document.createElement("img");
  const msg = document.createElement("span");
  const icon_close = document.createElement("img");

  alert_msg.innerHTML = ``;


  icon_msg.setAttribute("src", `./src/assets/${type}.svg`)
  icon_msg.setAttribute("alt", "ícone de alerta")
  msg.textContent = message;
  icon_close.setAttribute("src", "./src/assets/close.svg")


  alert_msg.append(icon_msg, msg, icon_close);
  alert_msg.classList.add(type);
  alert_msg.classList.add("reveal");

  icon_close.onclick = (e) => {
    const element_alert = e.target.parentElement;
    element_alert.classList.remove(type)
    element_alert.classList.remove("reveal")
    alert_msg.innerHTML = ``;

  }

  setTimeout(() => {
    alert_msg.classList.remove(type)
    alert_msg.classList.remove("reveal")
    alert_msg.innerHTML = ``;
  }, 3000)

}
