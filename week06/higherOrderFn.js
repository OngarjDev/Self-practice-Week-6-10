const z = 1
function makeAdder(x) {
    return function dosomething(y){
        return x + y + z
    }
}
const result = makeAdder(10)
console.log(typeof result)


const a = counter()
console.log(a)