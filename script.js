let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let increment_value = document.getElementById("increment");
let counterNumber = document.getElementById("number");
let reset = document.getElementById("reset");

addBtn.addEventListener("click" , () => {
    counterNumber.innerText = parseInt(increment_value.value) + parseInt(counterNumber.innerText);
});

subtractBtn.addEventListener("click" , () => {
    let count = parseInt(counterNumber.innerText) - parseInt(increment_value.value);
    counterNumber.innerText = count < 0 ? 0 : count; //negative value handled here
});

reset.addEventListener("click" , () => {
    counterNumber.innerText = 0;
    increment_value.value = 1;
});
