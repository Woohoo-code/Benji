import express from "express"
const app = express()
const port = 1424
app.get("/a.js", (req, res) => {
    res.send(`
    function eat(){
    res.send("ate")
    eat()}`)
})
app.get('/', (req, res) => {

  res.send('<script src="a.js" ></script><button onClick={eat}>Button</button>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
