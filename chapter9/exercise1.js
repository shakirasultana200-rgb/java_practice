const count = document.querySelector("#count");

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

let value = 0;

increase.addEventListener("click", () => {
    value++;
    count.textContent = value;
});

decrease.addEventListener("click", () => {
    value--;
    count.textContent = value;
});

reset.addEventListener("click", () => {
    value = 0;
    count.textContent = value;
});