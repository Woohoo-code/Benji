import { useState } from "react"


function App() {
  function Hi(){

setg(g+1)

localStorage.setItem("num", g+1)
}
function upd(event)
{
  setvalue(event.target.value)
}
function upds(event)
{if(value == "adminB66") {
setg(Number(event.target.value))
}

}
let [value,setvalue] = useState("")
let [g,setg] = useState(Number(localStorage.getItem("num")))
return <div><p>Number is equal to {g}</p><button onClick={Hi} >Click me</button><input type="text" value={value} onChange={upd}></input><input type="number" value={g} onChange={upds}></input></div>

}

export default App
