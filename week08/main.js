///JSO 122


let soup = document.getElementById("soup");
let soup_querySelector = document.querySelector("#soup");
let meats_querySelectorAll= document.querySelectorAll(".meat")
console.log(soup)
console.log(soup_querySelector)
console.log(meats_querySelectorAll)

const meatElements = document.querySelectorAll(".meat")

let beefSoupElement = "Chicken Wings"
meatElements.forEach((ele) => {
    const meatElements = ele
    if (meatElements.textContent === beefSoupElement){
        console.log(beefSoupElement)
    }
})

//JSO 122
const appetizer = document.getElementById("appetizer");
console.log(appetizer.firstElementChild)

