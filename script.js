const text = "Software Developer | Java | Python | Web Development"

let i = 0

function typing(){

document.querySelector(".typing").textContent = text.slice(0,i)

i++

if(i <= text.length){

setTimeout(typing,80)

}

}

typing()
