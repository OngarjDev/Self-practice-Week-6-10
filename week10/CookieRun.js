import { CookieUtil } from './CookieUtil.js'
console.log(document.cookie)
document.cookie = `Express=flash_express;expires=${new Date(2025, 9, 15)}`
document.cookie = `'Meassge'="แอบชอบโอ";expires=${new Date(2098, 9, 15)}`
const obj = new CookieUtil
console.log(CookieUtil.get("Express"))
console.log(CookieUtil.set("TestName","TestValue",new Date(2098, 9, 15)))
console.log(CookieUtil.unset("TestName","TestValue",new Date(2098, 9, 15,24,25)))