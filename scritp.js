const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Messagge one",
  "Messagge two",
  "Messagge three",
  "Messagge four",
  "Messagge five",
];

button.addEventListener("click", createNotification);

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
