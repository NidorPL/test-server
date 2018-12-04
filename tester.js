const os = require("os")
const http = require('http');

const server = http.createServer((req,res) => {
	res.statusCode= 200
	res.setHeader("Content-Type", "text/plain")
	res.end("test server running on: \n\n" + 
		"arch: " + os.arch() + " \n" + 
		"platform: " + os.platform() + "\n"
		)
})


server.listen("3000", "0.0.0.0", () => {
	console.log("server running at localhost:3000")
})





