const messages = [
  "It is certain",
  "It is decidedly so",
  "I do not recommend",
  "Don't even try",
  "Bad idea",
  "Great idea!",
  "Yes, sure!",
  "That sounds good",
  "Yeah, it definitely needs to be done",
  "I don't think it's a good idea",
  "Maybe not today?",
  "Definitely NO",
  "You wish!",
  "No doubt 😉",
  "Absolutely",
  "Possibly",
  "Stars say NO",
];

function getEightBallMessage() {
  let messageSize = messages.length;
  let randomIndex = Math.floor(Math.random() * messageSize);
  let fortuneStr = messages[randomIndex];
  return fortuneStr;
}

function changeMessage() {
  const eightEl = document.getElementById("eight");
  const answerEl = document.getElementById("answer");
  eightEl.textContent = "";
  answerEl.textContent = getEightBallMessage();
}

const buttonEl = document.getElementById("button");
buttonEl.addEventListener("click", changeMessage);
