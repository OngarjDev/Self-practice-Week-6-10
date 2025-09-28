/*
ให้เขียน JavaScript (ใส่ใน <script> หรือไฟล์ .js) เพื่อทำสิ่งต่อไปนี้:

เข้าถึง div#container และเก็บลงในตัวแปร container.
เข้าถึง h1.title และเปลี่ยนข้อความเป็น "Favorite Fruits (Editable)".
เข้าถึง ul#fruit-list แล้ว:
    ใช้ querySelectorAll เพื่อเก็บ <li> ทุกตัวเป็น NodeList ชื่อ items.
    เปลี่ยนสีตัวอักษรของผลไม้ ลำดับที่ 2 (Banana) เป็นสี ส้ม (orange).
ใช้ parent/child relationship
    จาก fruit-list ให้เข้าถึงลูก <li> ตัวแรก โดย ไม่ใช้ querySelector (ใช้ firstElementChild).
    แสดงชื่อผลไม้ตัวแรกใน console.
เข้าถึง พี่น้อง (sibling) ของ <p class="note"> และเปลี่ยนพื้นหลังของปุ่ม (#add-btn) เป็นสี lightgreen.
เพิ่มผลไม้ใหม่:
    เมื่อคลิกปุ่ม #add-btn ให้ prompt ชื่อผลไม้จากผู้ใช้
    สร้าง <li> ใหม่ ใส่ชื่อผลไม้ที่กรอก
    ต่อท้ายเป็นลูกใหม่ของ #fruit-list (ใช้ appendChild หรือ append)

เงื่อนไข:
    ห้ามใช้ jQuery
    ต้องใช้ DOM API พื้นฐาน (getElementById, querySelector, querySelectorAll, parentNode, children, firstElementChild, nextElementSibling, appendChild ฯลฯ)
    เขียนโค้ดให้ สั้น กระชับ อ่านง่าย

สิ่งที่โจทย์ทดสอบ:
✅ การเข้าถึง Element หลายวิธี
✅ การอ่าน/แก้ไขข้อความ (textContent / innerText)
✅ การเข้าถึง child, parent, sibling
✅ การสร้างและเพิ่ม node ใหม่ลงใน DOM
✅ การทำงานกับ Event (click + prompt)

*/
let container = document.getElementById("container")
container.childNodes[1].textContent = "Favorite Fruits (Editable)"
let ul_fruitslist = container.querySelector("ul#fruit-list")

ul_fruitslist.children[1].style.color = "orange"
console.log(ul_fruitslist.firstElementChild.textContent)

container.querySelector("p.note").nextElementSibling.style = "background-color: lightgreen;"

let btn_add = document.getElementById("add-btn")

btn_add.addEventListener("click",() => {let name = prompt("กรอกชื่อผลไม้ที่ต้องการเพิ่ม");
    let new_list = document.createElement("li");
    let new_name = document.createTextNode(name);
    new_list.appendChild(new_name)
    ul_fruitslist.appendChild(new_list)})