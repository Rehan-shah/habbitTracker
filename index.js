const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
	res.send("This is working")
})

app.get("/write",(req,res)=>{
	res.send("data for home")
})

app.post("/post_name", (req, res) => {
	let { name } = req.body
	console.log(name)
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
