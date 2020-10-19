// Your code goes here!

//import

import {modulo, percentage, percentageOf, difference} from './percentage.js';
// OR import * as percentageFile from './percentage.js';

// modulo();
// percentage();
// percentageOf();
// difference();

import {calculateAspectRatio} from './aspect-ratio.js';
//calculateAspectRatio();

//add the functionality to the UI 

let modulo1 = document.getElementById('modulo_1');
let modulo2 = document.getElementById('modulo_2');
let moduloResult=document.getElementById('modulo_result');
moduloResult.addEventListener('keyup',()=>{
    moduleResult.value = modulo(modulo1.value, modulo2.value)
});

let percentage1 = document.getElementById('percentage_1');
let percentage2 = document.getElementById('percentage_2');
let percentageResult = document.getElementById('percentage_result');
percentageResult.addEventListener('keyup', () => {
    percentageResult.value = percentage(percentage1.value, percentage2.value)
});

let percentageOf1 = document.getElementById('percentageOf_1').value;
let percentageOf2 = document.getElementById('percentageOf_2').value;
let percentageOfResult = document.getElementById('percentageOf_result');
percentageOfResult.addEventListener('keyup', () => {
    percentageOfResult.value = percentageOf(percentageOf1, percentageOf2)
});

let difference1 = document.getElementById('percentageOf_1').value;
let difference2 = document.getElementById('difference_2').value;
let differenceResult = document.getElementById('percentageOf_result');
differenceResult.addEventListener('keyup', () => {
    differenceResult.value = difference(difference1, difference2)
});

//function calculateAspectRatio(originalWidth, originalHeight, newValue, valueType) 

let width = document.getElementById('ratio_1').value;
let height = document.getElementById('ratio_2').value;
let new_width = document.getElementById('ratio_result-width');
let new_height = document.getElementById('ratio_result-height');
new_width.addEventListener('keyup', () => {
    let value_type = 'h';
    let new_value = new_height.value;
    new_width.value = calculateAspectRatio(width,height, new_value, value_type);
});

new_height.addEventListener('keyup', () => {
    let value_type = 'h';
    let new_value = new_height.value;
    new_height.value = calculateAspectRatio(width,height, new_value, value_type);
});