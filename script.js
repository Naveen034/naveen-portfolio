window.addEventListener("load",function(){

document.getElementById("loader").style.display="none"

})

var typed = new Typed(".typing",{

strings:[
"Software Developer",
"DevOps Enthusiast",
"Java Developer",
"Machine Learning Explorer"
],

typeSpeed:60,
backSpeed:40,
loop:true

})

const canvas = document.getElementById("cloud")
const ctx = canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()
