import { useState } from 'react'
import './App.css'

function App() {
  function add(){
  let listey = []
  for(let i = 0;i<task.length;i+=1){
    listey.push(task[i])
  }
  listey.push(input)
  settask(listey)

  }
  function Remove(j){
  let lister = []
  for(let i = 0;i<task.length;i+=1){
  if( i !== j){
    lister.push(task[i])
  }
  }
  settask(lister)
  }
  let v = []
  let [task, settask] = useState(["Task 1","Task 2"])
  let [input, setinput] = useState("Example Task")
  for(let i = 0;i<task.length;i+=1){
  v.push(<li key={i}>{task[i]}<button onClick={()=>Remove(i)}>Click to remove</button></li>)
  }
function text(event){
setinput(event.target.value)
}
return (<div>
  <button onClick={add}>Add Task</button>
  <input type='text' onChange={text} value={input}></input>
  <ol>Task List {v}</ol>
  </div>);

}

export default App
