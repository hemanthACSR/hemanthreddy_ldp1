const localDisplay = document.getElementById("local");
const sessionDisplay = document.getElementById("session");
const incBtn = document.getElementById("inc");
const clearBtn = document.getElementById("clear");


let localScore = localStorage.getItem("localScore");
let sessionScore = sessionStorage.getItem("sessionScore");


localScore = localScore ? Number(localScore) : 0;
sessionScore = sessionScore ? Number(sessionScore) : 0;


localDisplay.textContent = localScore;
sessionDisplay.textContent = sessionScore;


incBtn.addEventListener("click", () => {
  localScore++;
  sessionScore++;

  localStorage.setItem("localScore", localScore);
  sessionStorage.setItem("sessionScore", sessionScore);

  localDisplay.textContent = localScore;
  sessionDisplay.textContent = sessionScore;
});


clearBtn.addEventListener("click", () => {
  localScore = 0;
  sessionScore = 0;

  localStorage.setItem("localScore", 0);
  sessionStorage.setItem("sessionScore", 0);

  localDisplay.textContent = 0;
  sessionDisplay.textContent = 0;
});
