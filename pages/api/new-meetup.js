import { MongoClient } from "mongodb"
import { createKey } from "next/dist/shared/lib/router/router"

export default async function addHandler(req, res){


    if(req.method === "POST"){
        const data = req.body

        const client = await MongoClient.connect("mongodb+srv://ammar:123@atlascluster.ke0a8pp.mongodb.net/meetups?retryWrites=true&w=majority&appName=AtlasCluster")

        const db = client.db()

        const meetupsCollection = db.collection("meetups")

        const result = await meetupsCollection.insertOne(data)
        
        console.log(result)

        client.close()

        res.status(201).json({message: "data inserted"})
    }
}