// Your code goes here!

import {modulo, percentage,percentageOf, difference } from "./percentage.js"
import {calculateAspectRatio} from "./aspect-ratio.js"


let modulo1= document.getElementById("modulo_1")
let modulo2= document.getElementById("modulo_2")

let moduloResult=document.getElementById("modulo_result")


modulo2.addEventListener("keyup",()=>{
    moduloResult.value= modulo(modulo1.value, modulo2.value)
})