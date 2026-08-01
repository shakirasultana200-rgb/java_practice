const button = document.querySelector("#btn");
const joke = document.querySelector("#joke");

button.addEventListener("click", async () => {

    joke.textContent = "Loading...";

    try {

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await response.json();

        joke.textContent = `${data.setup} ${data.punchline}`;

    } catch (error) {

        joke.textContent = "Failed to load joke.";

    }

});