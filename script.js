const button = document.querySelector("#calculateBtn");
const message = document.querySelector("#message");

function calculateScore(firstScore, secondScore) {
  const total = firstScore + secondScore;
  return total;
}

function showResults(name, score) {
  message.textContent = `${name} scored ${score}`;
}
button.addEventListener("click", function () {
  const studentName = prompt("Give me your name.");
  const firstScore = Number(prompt("Give me your first score."));
  const secondScore = Number(prompt("Give me your second score."));
  const score = calculateScore(firstScore, secondScore);
  showResults(studentName, score);
});
