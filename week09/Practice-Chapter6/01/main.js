let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirm_password = document.getElementById('confirm-password')
let btn_create_account = document.getElementById('submit')
let text_action = document.querySelector("form>p")
btn_create_account.addEventListener("click", (e)=>{
    console.log("click")
    e.preventDefault()
    if(username.value === null || email.value === null || password.value === null || confirm_password.value === null){
        console.log("no value")
        text_action.textContent = "missing some values, please try again!"
        text_action.style.color = "red"
    }else if(password.value !== confirm_password.value){
        console.log("no match")
        text_action.textContent = "password and confirm do not match, check again"
        text_action.style.color = "red"
    }else{
        text_action.textContent = "your data completed"
        text_action.style.color = "green"
    }
})