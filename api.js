const express = require('express');

const app = express();
const port = 3000;

app.get('/login', (req, res) => {
	res.send('Success');
	res.status('200');
});

app.listen(port, () => {
	console.log('App listening on port', port);
});
