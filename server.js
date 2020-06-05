const express = require('express');

const app = express();

app.use(express.static('./dist/meal-list'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/meal-list/'}),
);

app.listen(process.env.PORT || 8080);