import axios from "axios"
import React, { useState , useEffect} from "react"
import "./App.css"

function App() {
	const [ name, setName ] = useState("")
	const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:4000/write").then(function(response) {
			setHome(response.data)
		})
	}, [])

	async function postName(event) {
		event.preventDefault()
		try {
			await axios.post("http://localhost:4000/post_name", {
				name
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="App">
			<form onSubmit={postName}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit">Send Name</button>
			</form>
			<p>{home }</p>
			<p>hello</p>
		</div>
	)
}

export default App
