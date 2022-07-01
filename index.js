const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000 ;
require('dotenv').config();
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

// app.use(cors());
app.use(express.json());
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
//task-management
// 2wpYQGnjIvYsVp2w


const uri = "mongodb+srv://task-management:2wpYQGnjIvYsVp2w@cluster0.iz29v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



;

async function run(){
    try{
        await client.connect();
        const alltask =client.db("taskmanasment").collection("task");
    //get my task
        app.get('/task', async(req,res)=>{
            const result = await alltask.find().toArray();
            res.send(result);

        })
    // post my task
    app.post ('/addtask',async(req,res)=>{
        const addtask = req.body;
        const result = await alltask.insertOne(addtask);
        res.send(result); 
    })
    //ubdate
    app.patch("/updatetask/:id", async (req, res) => {
        const id = req.params.id;
      
        const data = req.body;
        const result = await alltask.updateOne(
        {_id:ObjectId(id)}, // sometime _id:ObjectId(id)
        {
        $set: data,
        }
        );
        res.send(result);
        });

    //delete 

    app.delete("/task/:id", async (req, res) => {
        const id = req.params.id;
       
        const result = await alltask.deleteOne({ _id: ObjectId(id) });
        res.send(result);
        });
    }
    
    finally{

}
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})