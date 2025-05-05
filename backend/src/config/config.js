
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://samiullah:<db_password>@cluster0.yyxndvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

import mongoose from "mongoose";

const ConnectDb = async()=>{
    try {
        const client = await mongoose.connect("mongodb+srv://samiullah:samiullah@cluster0.yyxndvv.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`MongoDB connected ${client.connection.host}`);
    } catch (error) {
        console.log("Error connecting to database",error.message)
    }
}

export default ConnectDb