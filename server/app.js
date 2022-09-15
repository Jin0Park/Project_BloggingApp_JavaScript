const express = require('express');

const app = express();

app.listen(400, () => {
    console.log('Listening for requests on my port 4000');
})