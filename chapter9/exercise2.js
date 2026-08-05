const text = document.querySelector("#text");
const result = document.querySelector("#result");

text.addEventListener("input", () => {
    result.textContent = text.value.length + " characters";
});