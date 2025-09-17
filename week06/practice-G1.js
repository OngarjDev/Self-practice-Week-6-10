// JSO 122
function idGenerator(){
    let count = 0
    function increment(){
        return ++count
    }
    return increment
}

const idGen = idGenerator()

console.log(idGen())
console.log(idGen())
console.log(idGen())