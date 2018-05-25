const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3001;

const routes = require('../routes');

app.use(express.static(publicPath));

app.use('/api', routes);

app.listen(port, () => {
    console.log('Server is up! ' + port);
});





