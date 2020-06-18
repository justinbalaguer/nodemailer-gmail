const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; /* change 8080 in production (if pushing to heroku) */

app.use(cors());
app.use(express.json()); /* data wil be in json format */

const emailApi = require('./routes/api');

app.use('/api', emailApi); /* will route to https://<URL>/api */

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})