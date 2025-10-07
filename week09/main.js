let btnsubmit = document.querySelector("input[type='submit']")
let txtfname = document.querySelector("#fname")
let txtlname = document.querySelector("#lname")
btnsubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(txtfname.value)
    console.log(txtlname.value)
})
