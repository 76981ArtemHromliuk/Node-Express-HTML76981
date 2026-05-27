const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});