const buttons = document.getElementsByTagName('button')
const box = document.getElementById('box')
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        
        if (button.dataset.color === "red") {
            box.style.backgroundColor = "red"
        }

        if (button.dataset.color === "blue") {
            box.style.backgroundColor = "blue"
        }

        if (button.dataset.color === "green") {
            box.style.backgroundColor = "green"
        }
    })
})
