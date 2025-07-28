import { useState } from "react"


function App() {
  function Hi(){
setg(g+1)
}
let [g,setg] = useState(0)
return <div><button onClick={Hi} >Click me</button><p>Number is equal to {g}</p></div>

}

export default App
