/*
	A static server to server build folder
*/
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Server production build of react app
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Page not found
app.use((req, res, next)=>{
	return res.status(404).json({
		success: false,
		message: "Page not found on this server",
		body: {}
	});
});

app.listen(port);