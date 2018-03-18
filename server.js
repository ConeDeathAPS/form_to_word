const express = require('express');
const bp = require('body-parser');
const ejs = require('ejs');
const app = express();

app.use(express.static('static'));

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.get('/', (req, res) => {
    return res.sendFile('index.html');
});

app.post('/form', (req, res) => {
    console.log('Received post with body:', req.body);
    return res.send('Done');
});

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});