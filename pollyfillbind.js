
const userObj = {
    fname: "Sreelekha",
    lname: "Kutikanti"
}

const printName = function (hometown, state) {
    console.log(this.fname + " " + this.lname + " from " + hometown + ", " + state)
}

const printMyName = printName.bind(userObj);
printMyName("Hyderabad", "Telangana")


Function.prototype.mybind = function (...args) {
    let func = this;
    const refObj = args[0];
    const remainArgs = args.slice(1)
    return function (...arguments) {
        func.apply(refObj, [...remainArgs, ...arguments])
    }
}

const printMyFullName = printName.mybind(userObj, "Hyderabad", "Telangana")
printMyFullName()


const arr = [10, 20, 30, 40]
const mappedArr = arr.map(each => each * 2)
console.log(mappedArr)

//pollyfill for map method
Array.prototype.myMap = function (cb) {
    let myArr = this;
    let func = cb
    const finalArr = []
    for (let item of myArr) {
        finalArr.push(func(item))
    }
    // console.log(myArr,func,finalArr)
    return finalArr;
}

const myMappedArr = arr.myMap(each => each * 3)
console.log(myMappedArr)

//pollyfill for filter method
Array.prototype.myFilter = function (cb) {
    const finalArr = []
    for (let item of this) {
        if (cb(item)) {
            finalArr.push(item)
        }
    }
    return finalArr
}

const myFilteredArr = arr.myFilter(each => each > 20)
console.log(myFilteredArr)

//flatten array by using recursion

const arr2 = [1, 2, 3, [4, [5, 6, [7, 8, 9, 10]]]]

const flattenArr = (arr, initialArr = []) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            flattenArr(curr, acc)
        } else {
            acc.push(curr)
        }
        return acc
    }, initialArr)
}

console.log(flattenArr(arr2))

const total = arr.reduce((acc, curr) => {
    console.log(acc, curr)
    return acc + curr
}, 0)

console.log(total)

//flatten array by using recursion and flat
const arrEg = [[1, [2, 3], 4], 5, 6]

const flattenArr2 = (arr) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flattenArr2(curr))
        }
        console.log(acc, curr)
        return acc.concat(curr)
    }, [])

}

console.log(flattenArr2(arrEg))

//polyfill for reduce

Array.prototype.myReduce = function (cb) {
    let sum = 0
    for (let item of this) {
        sum = cb(sum, item)
        // sum += item
    }
    return sum

}

const sum2 = arr.myReduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sum2)




