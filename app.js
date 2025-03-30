"use strict";

const button = document.getElementById("button");
const peopleEntered = document.getElementById("peopleCounted");
let people = 0;
button.addEventListener("click", function () {
  people++;
  peopleEntered.textContent = people;
});
