const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/content', async (req, res) => {
res.status(200).send({message:'This is your content'})
})


app.get('/', (req, res) => {
    res.send('Hello world - Server is running successfully!')
})
app.listen(port, () => {
    console.log(`Listening to port - ${port}`);
})