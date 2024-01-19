
//currying with bind
let multiply = (x, y) => {
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5)


let sum = (x) => {
    return (y) => {
        // console.log(x + y)
        return y ? sum(x + y) : x
        // if (y) {
        //     const sum = x + y
        //     return add(sum)
        // }
        // else {
        //     console.log(x)
        // }
        // return (z) => {
        //     if (z) {
        //         console.log(z+sum)
        //     }
        //     console.log(sum)
        // }
    }
}

console.log(sum(1)(2)(3)(4)(5)())
console.log(sum(1)())


const add = (x) => {
    return (y) => {
        console.log("sum is...", x + y)
    }
}

const addByTwo = add(2)
addByTwo(6)



const addByThree = add(3)
addByThree(6)