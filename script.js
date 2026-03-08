const text = "Software Developer | Java | Python | Web Development"

let index = 0

function type(){

document.querySelector(".typing").textContent = text.slice(0,index)

index++

if(index <= text.length){

setTimeout(type,80)

}

}

type()
