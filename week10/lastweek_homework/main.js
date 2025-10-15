const Inback = document.getElementById('bgColor')
const Infront = document.getElementById('fontColor')
const Infont = document.getElementById('fontSize')
const form = document.getElementById('settingsForm')

const displaybg = document.body
const displayfront = document.fonts

setcolorandsize();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.cookie = "bgColor=" + Inback.value
    document.cookie = "fontColor=" + Infront.value
    document.body.style.fontSize = Number.parseInt(get("fontSize"));
    setcolorandsize();
});

function reset(){
    document.cookie = "bgColor=" + Inback.value
    document.cookie = "fontColor=" + Infront.value
    document.body.style.fontSize = Number.parseInt(get("fontSize"));
    setcolorandsize()
}
function setcolorandsize() {
    document.body.style.backgroundColor = get("bgColor");
    document.body.style.color = get("fontColor");
    document.body.style.fontSize = Number.parseInt(get("fontSize"));
}


function get(name) {
    let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null
    if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(';', cookieStart)
        if (cookieEnd === -1) {
            cookieEnd = document.cookie.length
        }
        cookieValue = decodeURIComponent(
            document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
        )
    }
    return cookieValue
}