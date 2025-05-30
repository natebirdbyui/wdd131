const jokeBtn = document.getElementById("jokeBtn");
const clearBtn = document.getElementById("clearBtn");
const jokeContainer = document.getElementById("jokeContainer");

// Initially disable Clear button because no joke yet
clearBtn.disabled = true;

jokeBtn.addEventListener("click", async function() {
  try {
    jokeBtn.disabled = true;
    jokeContainer.textContent = "Loading...";
    clearBtn.disabled = true;  // Disable Clear during loading

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    jokeContainer.textContent = `${data.setup} — ${data.punchline}`;
    clearBtn.disabled = false; // Enable Clear once joke is loaded
  } catch (error) {
    jokeContainer.textContent = "Oops! Could not fetch a joke.";
  } finally {
    jokeBtn.disabled = false;
  }
});

clearBtn.addEventListener("click", function() {
  jokeContainer.textContent = "";
  clearBtn.disabled = true;  // Disable Clear after clearing
});
