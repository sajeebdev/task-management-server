const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000 ;
require('dotenv').config();
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
app.use(cors());
app.use(express.json());

//task-management
// 2wpYQGnjIvYsVp2w




const uri = "mongodb+srv://task-management:2wpYQGnjIvYsVp2w@cluster0.iz29v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//   client.close();

});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})