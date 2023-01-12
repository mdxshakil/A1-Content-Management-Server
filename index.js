const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
app.use(express.json());
app.use(cors());

// connect to db
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.frmvlrq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const contentCollection = client.db('contentData').collection('contents')

        //post a content
        app.post('/content', async (req, res) => {

        })
        //get all the content
        app.get('/content', async (req, res) => {

        })
        //get a particular content
        app.get('/content/:id', async (req, res) => {

        })
        //delete a particular content
        app.delete('/content/:id', async (req, res) => {

        })
        //update a particular content
        app.put('/content/:id', async (req, res) => {

        })
    } finally {
        // await client.close()
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello world - Server is running greatly!!!!')
})
app.listen(port, () => {
    console.log(`Listening to port - ${port}`);
})

//https://a1-content-management-server.vercel.app/