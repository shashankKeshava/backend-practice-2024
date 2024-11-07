const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set CORS headers
const corsHeader = {
	origin: 'http://localhost:3000',
};

// Option 1 use cors module as middleware
// const cors = require('cors');
// app.use(cors({ corsHeader }));

// Set Common headers
app.use((req, res, next) => {
	//Option 2 set CORS wildcard
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	res.append('origin', 'http://localhost:3000');
	next();
});

// Text response
app.get('/text', (req, res) => {
	res.send('Success');
	res.status(200);
});

app.use(bodyParser.json());
// Body with JSON
app.post('/login', (req, res) => {
	const { email, password } = req.body;
	res.json({ status: 'success', email, password });
	res.status(200);
});

app.listen(port, () => {
	console.log('App listening on port', port);
});
