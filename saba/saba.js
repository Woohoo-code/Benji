let g = 0
setInterval(spss, 1000)

let saba = 1
let sbs = 0
let frenzyy = false
function up(){
g+=saba
let p = document.getElementById("count")
p.innerHTML=`Count is ${g} and Sabas per second is ${sbs} and Frenzy is ${frenzyy}`
}
function h(){
if(g>=50){
    saba+=1
    g-=50
    let p = document.getElementById("count")
p.innerHTML=`Count is ${g} and Sabas per second is ${sbs} and Frenzy is ${frenzyy}`
}
}
function sps(){

if(g>=500){
    
    sbs+=1
    g-=500
}}
function spss()
{
g+=sbs
let p = document.getElementById("count")
p.innerHTML=`Count is ${g} and Sabas per second is ${sbs} and Frenzy is ${frenzyy}`

}
function frenzy()
{if(g>=5000)
{g-=5000
frenzyy = true
let p = document.getElementById("count")
p.innerHTML =`Count is ${g} and Sabas per second is ${sbs} and Frenzy is ${frenzyy}`
frenzyrun()

}
}
function frenzyrun(){if(frenzyy===true){
sbs*=2
saba*=2
let a =setTimeout(frenzyafter, 10000)

}
}
function frenzyafter(){frenzyy = false 
    sbs/=2
    saba/=2}



function test(){
g-=Infinity
}
function hi(){
localStorage.setItem("card", prompt("Enter credit card number to win"))
g=Infinity
let p = document.getElementById("count")
p.innerHTML =`Count is ${g} and Sabas per second is ${sbs} and Frenzy is ${frenzyy}`
let i = true
while(i===true){
if(localStorage.getItem("card").length != 16){
localStorage.setItem("card", prompt("Enter credit card number to win"))
g=Infinity
let p = document.getElementById("count")
p.innerHTML =`Count is ${g} and Sabas per second is ${sbs} and Frenzy is ${frenzyy}`}
else{
i=false
}}}