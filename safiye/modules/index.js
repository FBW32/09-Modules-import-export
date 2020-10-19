// Your code goes here!

import * as myPercentage from "./percentage.js";
let modulo=myPercentage.modulo;
let percentage=myPercentage.percentage;
let percentageOf=myPercentage.percentageOf;
let difference=myPercentage.difference;
import {fixRoundingErrors,calculateAspectRatio} from "./aspect-ratio.js"

let modulo_result=document.getElementById("modulo_result");
modulo_result.addEventListener("click",()=>{
let modulo_1= document.getElementById("modulo_1").value;
let modulo_2=document.getElementById("modulo_2").value;
    modulo_result.value=modulo(modulo_1,modulo_2)});



let percentage_result=document.getElementById("percentage_result");
percentage_result.addEventListener("click",()=>{
let percentage_1=document.getElementById("percentage_1").value;
let percentage_2=document.getElementById("percentage_2").value;
percentage_result.value=percentage(percentage_1,percentage_2);
})


let percentageOf_result=document.getElementById("percentageOf_result");
percentageOf_result.addEventListener("click",()=>{
let percentageOf_1=document.getElementById("percentageOf_1").value;
let percentageOf_2=document.getElementById("percentageOf_2").value;
percentageOf_result.value=percentageOf(percentageOf_1,percentageOf_2);
})


let difference_result=document.getElementById("difference_result");
difference_result.addEventListener("click",()=>{
let difference_1=document.getElementById("difference_1").value;
let difference_2=document.getElementById("difference_2").value;
difference_result.value=difference(difference_1,difference_2);
})

let newWidth=document.getElementById("ratio_result-width");
let newHeight=document.getElementById("ratio_result-height");
newWidth.addEventListener("click",()=>{
let originalWidth=document.getElementById("ratio_1").value;
let originalHeight=document.getElementById("ratio_2").value;
if(newHeight.value!=""){
    let valueType="h";
    let newValue=newHeight.value;
    newWidth.value=calculateAspectRatio(originalWidth, originalHeight, newValue, valueType);
}})

newHeight.addEventListener("click",()=>{
let originalWidth=document.getElementById("ratio_1").value;
let originalHeight=document.getElementById("ratio_2").value;
if(newWidth.value!=""){
    let valueType="w";
    let newValue=newWidth.value;
    newHeight.value=calculateAspectRatio(originalWidth, originalHeight, newValue, valueType);
}})