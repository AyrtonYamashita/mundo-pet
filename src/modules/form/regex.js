const phone = document.querySelector("#phone");
const tutor = document.querySelector("#name-tutor")
const pet = document.querySelector("#name-pet")

const regex = /[^a-zA-ZÀ-ÿ\s]/g
tutor.oninput = () => {
  tutor.value = tutor.value.replace(regex, "")
}

pet.oninput = () => {
  pet.value = pet.value.replace(regex, "")
}

phone.oninput = () => {
  // Remove todos os caracteres que não são números
  let value = phone.value.replace(/\D/g, "");

  // Aplica a formatação: (XX) XXXXX-XXXX
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    value = value.replace(/^(\d*)/, "($1");
  }

  // Atualiza o valor do input
  phone.value = value;
};
