const express = require('express')
const app = express()
const port = 5000

//middlewear
//homepage routing
//server listioning
app.use(express.json())

// home page
app.get("/",(req,res) => {
    res.status(200).send("hello home")
})
// server port
app.listen(port, () => {
    console.log("server is running")

})