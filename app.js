let allBtns = document.querySelectorAll(".calculator-btn")
// console.log(allBtns);


screen = document.querySelector(".screen")
// console.log(screen);

const delBtn = document.querySelector(".calculator-btn-del")
// console.log(delBtn);

const erase = document.querySelector(".calculator-btn-erase")
// console.log(erase);

const total = document.querySelector(".calculator-btn-equal")
// console.log(total);

let numbers = ""
// console.log(numbers);

function callback(a) {
    a.addEventListener("click", executeEvent)

}
// console.log(callback);

allBtns.forEach(callback)
// console.log(allBtns.forEach);

function executeEvent(e) {
    numbers += e.target.textContent
    screen.value = numbers


}
// console.log(executeEvent);

let result = ""

total.addEventListener("click", function () {
    result = eval(screen.value)
    screen.value = result
    numbers = screen.value
})

delBtn.addEventListener("click", function () {
    numbers = screen.value.slice(0, numbers.length - 1)
    screen.value = numbers
})

erase.addEventListener("click", function () {
    numbers = ""
    screen.value = ""
})

