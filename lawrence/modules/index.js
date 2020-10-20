// Your code goes here!

import {modulo, percentage, percentageOf, difference} from "./percentage.js";

let modulo1 = document.getElementById("modulo_1")
let modulo2 = document.getElementById("modulo_2")
let moduloResult = document.getElementById("modulo_result")

modulo2.addEventListener("keyup",()=>{
    moduloResult.value = modulo(modulo1.value, modulo2.value)
})

let percentage1 = document.getElementById("percentage_1")
let percentage2 = document.getElementById("percentage_2")
let percentageResult =document.getElementById("percentage_result")

percentage2.addEventListener("keyup",()=>{
    percentageResult.value = percentage(percentage1.value, percentage2.value)
})

let percentageOf1 = document.getElementById("percentageOf_1")
let percentageOf2 = document.getElementById("percentageOf_2")
let percentageOfResult = document.getElementById("percentageOf_result")

percentageOf2.addEventListener("keyup",()=>{
    percentageOfResult.value = percentageOf(percentageOf1.value, percentageOf2.value)
})

let difference1 = document.getElementById("difference_1")
let difference2 = document.getElementById("difference_2")
let differenceResult = document.getElementById("difference_result")

difference2.addEventListener("keyup",()=>{
    differenceResult.value =difference(difference1.value, difference2.value)
})

import{calculateAspectRatio} from "./aspect-ratio.js"


let ratio1 = document.getElementById("ratio_1")
let ratio2 = document.getElementById("ratio_2")
let ratioResultWidth = document.getElementById("ratio_result-width")
let ratioResultHeight = document.getElementById("ratio_result-height")

ratioResultWidth.addEventListener("keyup",()=>{
    let valueType = "h"
    ratioResultHeight.value = calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value,valueType)
});

ratioResultHeight.addEventListener("keyup",()=>{
    let valueType = "w"
    ratioResultWidth.value = calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, valueType)
});

