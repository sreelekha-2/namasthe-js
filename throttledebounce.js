const debounce = (func, delay) => {
    console.log("debounce...")
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, delay)
    }
}


const throttle=(func,delay)=>{
    let flag=true
    return function(){
      if(flag){
        func() 
        flag=false
        setTimeout(()=>{
           flag=true
        },delay)
      }
    }
}

const betterDebounceFunction = debounce(fetchUsers, 300)
const betterThrottleFunction= throttle(fetchUsers, 1000)

document.getElementById("searchInput").addEventListener("keyup",betterDebounceFunction)

window.addEventListener("resize",betterThrottleFunction)

