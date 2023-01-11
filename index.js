const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world - Server is running successfully!')
})
app.listen(port, () => {
    console.log(`Listening to port - ${port}`);
})