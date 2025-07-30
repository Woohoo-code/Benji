
let g = Number(localStorage.getItem("count"))
function Up(){
g+=1
let p = document.getElementById("hi")
p.innerHTML = `Count is ${g}`
localStorage.setItem("count", g)

}
function times(){
g*=2
let p = document.getElementById("hi")
p.innerHTML = `Count is ${g}`
localStorage.setItem("count", g)

}