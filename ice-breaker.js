

let ice1 = document.getElementById("ice1");
let ice2 = document.getElementById("ice2");
let ice3 = document.getElementById("ice3");
let ice4 = document.getElementById("ice4");
let ice5 = document.getElementById("ice5");

let reveal1 = document.getElementById("reveal1");
let reveal2 = document.getElementById("reveal2");
let reveal3 = document.getElementById("reveal3");
let reveal4 = document.getElementById("reveal4");
let reveal5 = document.getElementById("reveal5");



reveal1.addEventListener("click", function() {
    ice1.textContent = ("- Biologist");
});

reveal2.addEventListener("click", function() {
    ice2.textContent = ("- Biome");
});

reveal3.addEventListener("click", function() {
    ice3.textContent = ("- Carbon");
});

reveal4.addEventListener("click", function() {
    ice4.textContent = ("- Marine");
});

reveal5.addEventListener("click", function() {
    ice5.textContent = ("- Ecology");
});



