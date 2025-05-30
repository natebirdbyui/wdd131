// Function that returns a Promise based on score
function checkScore(score) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (score >= 70) {
        resolve(`You are so smart... S-M-R-T. You've scored ${score}!`);
      } else {
        reject(`D-uh... ${score}? Did you nap through the test? 😴`);
      }
    }, 2000);
  });
}

// Function that prompts for a score and shows the result
async function checkMyScore() {
  const input = prompt("Enter your score:");
  const score = Number(input);

  if (isNaN(score)) {
    alert("Please enter a valid number.");
    return;
  }

  try {
    const result = await checkScore(score);
    const p = document.createElement("p");
    p.textContent = result;
    document.body.appendChild(p);
  } catch (error) {
    const p = document.createElement("p");
    p.textContent = error;
    document.body.appendChild(p);
  }
}
