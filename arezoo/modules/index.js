// Your code goes here!

import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";
import { modulo, percentage, percentageOf, difference } from "./percentage.js";

///modulo

let modulo1 = document.getElementById("modulo_1");
let modulo2 = document.getElementById("modulo_2");
let moduloResult = document.getElementById("modulo_result");
modulo2.addEventListener("change", (e) => {
  moduloResult.value = modulo(parseInt(modulo1.value), parseInt(modulo2.value));
});
////percentage

let firstPercentage = document.getElementById("percentage_1");
let secondPercentage = document.getElementById("percentage_2");
let percentageResult = document.getElementById("percentage_result");
secondPercentage.addEventListener("change", (e) => {
  percentageResult.value = percentage(
    parseInt(firstPercentage.value),
    parseInt(secondPercentage.value)
  );
});
//////percentageOf

let firstPercentageOf = document.getElementById("percentageOf_1");
let secondPercentageOf = document.getElementById("percentageOf_2");
let percentageResultOf = document.getElementById("percentageOf_result");
secondPercentageOf.addEventListener("change", (e) => {
  percentageResultOf.value = percentageOf(
    parseInt(firstPercentageOf.value),
    parseInt(secondPercentageOf.value)
  );
});

////difference

let difference1 = document.getElementById("difference_1");
let difference2 = document.getElementById("difference_2");
let differenceResult = document.getElementById("difference_result");
difference2.addEventListener("change", (e) => {
  differenceResult.value = difference(
    parseInt(difference1.value),
    parseInt(difference2.value)
  );
});

/////ratio

let ratio1 = document.getElementById("ratio_1");
let ratio2 = document.getElementById("ratio_2");
let ratioWidth = document.getElementById("ratio_result-width");
let ratioHeight = document.getElementById("ratio_result-height");

ratioWidth.addEventListener("change", (e) => {
  ratioHeight.value = calculateAspectRatio(
    parseInt(ratio1.value),
    parseInt(ratio2.value),
    parseInt(ratioWidth.value)
  );
});
ratioHeight.addEventListener("change", (e) => {
  ratioWidth.value = calculateAspectRatio(
    parseInt(ratio1.value),
    parseInt(ratio2.value),
    parseInt(ratioHeight.value)
  );
});
