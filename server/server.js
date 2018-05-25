const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log('Server is up! ' + port);
});





