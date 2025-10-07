let text_input = document.getElementById('keyInput')
let show_keyLog = document.getElementById('keyLog')

const spanElement = document.createElement("span");
spanElement.style.color = "blue";

text_input.addEventListener("keypress",(e)=>{
    console.log(e)
        const textNode = document.createTextNode(`You pressed: ` + e.key );
        const br = document.createElement('br');
        if(e.key === "Enter"){
            show_keyLog.appendChild(spanElement);
            spanElement.appendChild(textNode)
        }else{
            show_keyLog.appendChild(textNode);
        }
        show_keyLog.appendChild(br);
})