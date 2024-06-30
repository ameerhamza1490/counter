let btn = document.querySelector("#btn");
let countedValue = document.querySelector("#demo");
let counter = 0;

btn.addEventListener("click", () => {
    counter += 1
    countedValue.innerHTML = counter
})
