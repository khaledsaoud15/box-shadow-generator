const rangeX = document.querySelector(".rangeX");
const rangeY = document.querySelector(".rangeY");
const rangeA = document.querySelector(".rangeA");
const rangeS = document.querySelector(".rangeS");
const color = document.querySelector(".color");
const test = document.querySelector(".test");
const result = document.querySelector(".result input");
const copy = document.querySelector(".copy");

let x = document.querySelectorAll(".x");
let y = document.querySelectorAll(".y");

const generateShadow = () => {
  test.style.boxShadow = `${rangeX.value}px ${rangeY.value}px ${rangeA.value}px ${rangeS.value}px ${color.value} `;
  result.value = `box-shadow: ${rangeX.value}px ${rangeY.value}px ${rangeA.value}px ${rangeS.value}px ${color.value}`;
};

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.value);
});

const takingValues = (x, y) => {
  x.forEach((el, i) => {
    el.oninput = (e) => {
      y[i].value = e.target.value;
      generateShadow();
    };
  });
  color.oninput = () => {
    generateShadow();
  };
};

takingValues(x, y);
takingValues(y, x);
