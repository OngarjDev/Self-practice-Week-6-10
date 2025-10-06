// 1. remove Vegetable Soup
//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)
//2. get its children
const ulChildren = ulParent.children
let vegetElement = null
//3. find element node that satifies condition "Vegetable Soup"
Array.from(ulChildren).forEach((liEle) => {
  if (liEle.textContent.trim() === "Vegetable Soup") vegetElement = liEle
})
//4. remove element 3.
ulParent.removeChild(vegetElement)


//insertBefore create
//2. create new element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Cabbage Soup"
newLiElement.setAttribute("class", "vegan")
//3. find reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. insertBefore
ulParent.insertBefore(newLiElement, beefElement)

//Update
// 3. replace  Beef Soup with Pork Soup
//1. find parent element
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. replace
ulParent.replaceChild(newLiElement, beefElement)